const userService = require("../services/userService");

class UserController {
  async createUser(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json({
        success: true,
        message: 'Usuário criado com sucesso',
        data: newUser
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async getAllUsers(req, res) {
    try {
      const { page, limit } = req.query;
      const result = await userService.getAllUsers({ page, limit });
      
      // Se foi paginado, retornar com metadados
      if (result.count !== undefined) {
        const totalPages = Math.ceil(result.count / limit);
        res.status(200).json({
          success: true,
          data: result.rows,
          pagination: {
            currentPage: parseInt(page),
            totalPages,
            totalItems: result.count,
            itemsPerPage: parseInt(limit)
          }
        });
      } else {
        res.status(200).json({
          success: true,
          data: result
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await userService.updateUser(
        req.params.id,
        req.body
      );
      res.status(200).json({
        success: true,
        message: 'Usuário atualizado com sucesso',
        data: updatedUser
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async deleteUser(req, res) {
    try {
      const result = await userService.deleteUser(req.params.id);
      res.status(200).json({
        success: true,
        message: result.message
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  async getUsersCount(req, res) {
    try {
      const count = await userService.getUsersCount();
      res.status(200).json({
        success: true,
        data: { count }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async searchUsers(req, res) {
    try {
      const { q: searchTerm, page, limit } = req.query;
      
      if (!searchTerm) {
        return res.status(400).json({
          success: false,
          message: 'Parâmetro de busca "q" é obrigatório'
        });
      }

      const users = await userService.searchUsers(searchTerm, { page, limit });
      res.status(200).json({
        success: true,
        data: users,
        searchTerm
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new UserController();
