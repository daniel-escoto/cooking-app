import type { Prisma, Ingredient } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.IngredientCreateArgs>({
  ingredient: {
    one: {
      data: {
        name: 'String',
        quantity: 'String',
        measure: 'String',
        recipe: {
          create: {
            title: 'String',
            description: 'String',
            image: 'String',
            user: {
              create: {
                email: 'String4329018',
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
        name: 'String',
        quantity: 'String',
        measure: 'String',
        recipe: {
          create: {
            title: 'String',
            description: 'String',
            image: 'String',
            user: {
              create: {
                email: 'String6638850',
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

export type StandardScenario = ScenarioData<Ingredient, 'ingredient'>
