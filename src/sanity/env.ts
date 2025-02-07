export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-22'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk0iJrwCxiw2Vo53XsQbGEu50T2wCGdqjkhX27605NJMrBcUMhl9UqcuFAYNfltiJKt4oMklxuaZGVaZBXxZkK1SKifvORkxroC7f1UX6e1kCOGRkQY01dfAo2EIzslMu1kPci54zkjXvaz8Ed16I0QcorXw5As3UMjLv18YBUs7M1yncqPA",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
