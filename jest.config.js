module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
        '.(css|less|scss)$': 'identity-obj-proxy',
    },
}
