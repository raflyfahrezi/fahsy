/* eslint-disable no-undef */

const jestConfig = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
        '.(css|less|scss)$': 'identity-obj-proxy',
    },
}

module.exports = jestConfig
