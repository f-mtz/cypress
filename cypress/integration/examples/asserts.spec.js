///<reference types="cypress"/>

it('Igualdade', () =>{
  const a = 1

  expect(a).equal(1);
  expect(a, 'Deveria ser 1'),equal(1);
  expect(a).to.be.equal(1);
  expect(a).not.to.be.equal(b);

})

it('Lógicos', () => {
  const a = true
  const b = null
  const c;

  expect(a).to.be.true;
  expect(b).to.be.null;
  expect(c).to.be.undefined;
})

it()

