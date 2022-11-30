import type { Prisma, Recipe } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecipeCreateArgs>({
  recipe: {
    one: {
      data: {
        title: 'String',
        description: 'String',
        image: 'String',
        ingredients: 'String',
        steps: 'String',
        user: {
          create: {
            email: 'String3862965',
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
        ingredients: 'String',
        steps: 'String',
        user: {
          create: {
            email: 'String7936925',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Recipe, 'recipe'>
