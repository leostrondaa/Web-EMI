import vine from '@vinejs/vine'

export const createCourseValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(4),
    duration: vine.number().positive().withoutDecimals(),
  })
)

export const updateCourseValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(4).optional(),
    duration: vine.number().positive().withoutDecimals().optional(),
  })
)
