import type { Prisma, Step } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StepCreateArgs>({
  step: {
    one: {
      data: {
        number: 4674410,
        description: 'String',
        recipe: {
          create: {
            title: 'String',
            description: 'String',
            image: 'String',
            user: {
              create: {
                email: 'String6196975',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        number: 9054516,
        description: 'String',
        recipe: {
          create: {
            title: 'String',
            description: 'String',
            image: 'String',
            user: {
              create: {
                email: 'String6785758',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Step, 'step'>
