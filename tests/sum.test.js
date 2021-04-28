const { TestScheduler } = require("@jest/core")

function sum(a, b){
    return a + b
}

describe('Test sum function', () => {
    test('Powinno zsumowac dwie liczby', () => {
        const result = sum(1, 2)

        expect(result).toBe(3)
    })

})

// 1h 45min - wstęp do MOCK'ów --> podstawa testów
// 1h 51 min - uruchomienie testu
