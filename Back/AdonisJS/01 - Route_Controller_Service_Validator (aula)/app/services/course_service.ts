import logger from "@adonisjs/core/services/logger"

let courses: any = []
let currentId = 1

interface CourseType {
  name: string
  duration: number
}

export class CourseService {
  // Your code here
  async getAllCourses() {
    logger.info('ALL COURSES')
    return courses
  }

  async createCourse(courseData: CourseType) {
    logger.info('CREATE COURSES')

    if(!courseData.name || !courseData.duration) {
      return null
    }

    // const newCourse = { id: currentId++, ...courseData }
    const newcourse = {
      id: currentId++,
      name: courseData.name,
      duration: courseData.duration,
    }
    courses.push(newcourse)
    return courses[courses.length - 1]
  }

  async getCourseByID(id: number) {

    logger.info('SHOW COURSE')
    let course = null

    courses.forEach(item => {
      if(id == item.id)
          course = item
    })

    return course
  }

  async updateCourse(id: number, courseData: CourseType) {

    logger.info('UPDATE COURSE')
    let course = null

    courses.forEach((item, index) => {
      if(id == item.id) {
        courses[index] = { id, ...courseData }
        course = courses[index]
      }
    })

    return course
  }

  async deleteCourse(id: number) {

    logger.info('DELETE COURSE')
    let course = null

    courses.forEach((item, index) => {
      if(id == item.id) {
        course = courses[index]
        courses.splice(index, 1)
      }
    })

    return course
  }
}
