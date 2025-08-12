

const userRepository = require("../repositories/userRepository");
const { ValidationError, UniqueConstraintError } = require('sequelize');

class UserService {
    async createUser(userData) {
        try {
            // Validação básica
            if (!userData.name || !userData.email) {
                throw new Error("Nome e email são obrigatórios.");
            }

            // Verificar se o email já existe
            const existingUser = await userRepository.findByEmail(userData.email);
            if (existingUser) {
                throw new Error("Email já está em uso.");
            }

            return await userRepository.create(userData);
        } catch (error) {
            // Tratar erros específicos do Sequelize
            if (error instanceof ValidationError) {
                const messages = error.errors.map(err => err.message);
                throw new Error(messages.join('. '));
            }
            
            if (error instanceof UniqueConstraintError) {
                throw new Error("Email já está em uso.");
            }
            
            throw error;
        }
    }

    async getAllUsers(options = {}) {
        try {
            const { page, limit } = options;
            
            if (page && limit) {
                const offset = (page - 1) * limit;
                return await userRepository.findAndCountAll({
                    limit: parseInt(limit),
                    offset: parseInt(offset)
                });
            }
            
            return await userRepository.findAll();
        } catch (error) {
            throw new Error("Erro ao buscar usuários: " + error.message);
        }
    }

    async getUserById(id) {
        try {
            // Validar se o ID é um número válido
            if (!id || isNaN(id)) {
                throw new Error("ID de usuário inválido.");
            }

            const user = await userRepository.findById(parseInt(id));
            if (!user) {
                throw new Error("Usuário não encontrado.");
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(id, userData) {
        try {
            // Validar se o ID é um número válido
            if (!id || isNaN(id)) {
                throw new Error("ID de usuário inválido.");
            }

            // Validações de negócio antes de atualizar
            if (!userData.name && !userData.email) {
                throw new Error("Pelo menos um campo (nome ou email) deve ser fornecido para atualização.");
            }

            // Se está atualizando o email, verificar se já existe
            if (userData.email) {
                const existingUser = await userRepository.findByEmail(userData.email);
                if (existingUser && existingUser.id !== parseInt(id)) {
                    throw new Error("Email já está em uso por outro usuário.");
                }
            }

            const updatedUser = await userRepository.update(parseInt(id), userData);
            if (!updatedUser) {
                throw new Error("Usuário não encontrado para atualização.");
            }
            return updatedUser;
        } catch (error) {
            // Tratar erros específicos do Sequelize
            if (error instanceof ValidationError) {
                const messages = error.errors.map(err => err.message);
                throw new Error(messages.join('. '));
            }
            
            if (error instanceof UniqueConstraintError) {
                throw new Error("Email já está em uso por outro usuário.");
            }
            
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            // Validar se o ID é um número válido
            if (!id || isNaN(id)) {
                throw new Error("ID de usuário inválido.");
            }

            const deleted = await userRepository.delete(parseInt(id));
            if (!deleted) {
                throw new Error("Usuário não encontrado para exclusão.");
            }
            return { message: "Usuário deletado com sucesso." };
        } catch (error) {
            throw error;
        }
    }

    async getUsersCount() {
        try {
            return await userRepository.count();
        } catch (error) {
            throw new Error("Erro ao contar usuários: " + error.message);
        }
    }

    async searchUsers(searchTerm, options = {}) {
        try {
            if (!searchTerm || searchTerm.trim() === '') {
                throw new Error("Termo de busca é obrigatório.");
            }

            const { page, limit } = options;
            let searchOptions = {};
            
            if (page && limit) {
                searchOptions.offset = (page - 1) * limit;
                searchOptions.limit = parseInt(limit);
            }

            return await userRepository.search(searchTerm.trim(), searchOptions);
        } catch (error) {
            throw new Error("Erro ao buscar usuários: " + error.message);
        }
    }
}

module.exports = new UserService();
