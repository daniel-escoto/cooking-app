import type { Prisma, Recipe } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecipeCreateArgs>({
  recipe: {
    one: {
      data: {
        title: 'String',
        description: 'String',
        image: 'String',
        user: {
          create: {
            email: 'String7619851',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        description: 'String',
        image: 'String',
        user: {
          create: {
            email: 'String3157813',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Recipe, 'recipe'>
