describe('Elevador', () => {
    const Elevador = require('./testes.js');
    it('deve estar no andar 0', () => {
        expect(Elevador.andar).toBe(0);
    });

    it('deve ir ao andar 1', () => {
        Elevador.subir();
        expect(Elevador.andar).toBe(1);
    });

    it('deve voltar ao andar 0', () => {
        Elevador.descer();
        expect(Elevador.andar).toBe(0);
    })
})