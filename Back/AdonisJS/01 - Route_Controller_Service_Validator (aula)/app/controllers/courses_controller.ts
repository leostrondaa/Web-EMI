import type { HttpContext } from '@adonisjs/core/http'
import { CourseService } from '#services/course_service'
import { createCourseValidator, updateCourseValidator } from '#validators/course'
import logger from "@adonisjs/core/services/logger"

export default class CoursesController {

  private service: CourseService

  constructor() {
    this.service = new CourseService()
  }

  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {

    const courses = await this.service.getAllCourses()

    return response.status(200).json({
      message: 'OK',
      data: courses,
    })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {

    const payload = await request.validateUsing(createCourseValidator)
    const course = this.service.createCourse(payload)
    // logger.info(course)

    if(!course) {
      return response.status(500).json({
        message: 'ERROR',
      })
    }

    return response.status(201).json({
      message: 'OK',
      data: course,
    })
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {

    const course = await this.service.getCourseByID(params.id)

    if(!course) {
      return response.status(404).json({
        message: 'NOT FOUND',
      })
    }

    return response.status(200).json({
      message: 'OK',
      data: course,
    })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {

    const payload = await request.validateUsing(createCourseValidator)
    const course = await this.service.updateCourse(params.id, payload)

    if(!course) {
      return response.status(404).json({
        message: 'NOT FOUND',
      })
    }

    return response.status(200).json({
      message: 'OK',
      data: course,
    })
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {

    const course = await this.service.deleteCourse(params.id)

    if(!course) {
      return response.status(404).json({
        message: 'NOT FOUND',
      })
    }

    return response.status(200).json({
      message: 'OK',
      data: course,
    })
  }
}
