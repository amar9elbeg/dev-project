import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:3000/api/graphql',
    // documents: ['src/**/*.tsx'],
    generates: {
        './generated/': {
            preset: 'client',
        }
    },
}
export default config