const { Person } = require("../src/person");

let person = new Person("Ryan", 30, "male", [
  "being a hardarse",
  "agile",
  "ssd hard drives.",
]);
describe("Person", function () {
  it("should show Ryan as a name", function () {
    expect(person.name).toBe("Ryan");
  });

  it("should show age 30", function () {
    expect(person.age).toBe(30);
  });

  it("should show gender", function () {
    expect(person.gender).toEqual("male");
  });

  it("should show interests", function () {
    expect(person.interests).toBeDefined([
      "being a hardarse",
      "agile",
      "ssd hard drives.",
    ]);
  });

  it("should say hello", function () {
    expect(person.hello()).toEqual(
      "Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives."
    );
  });
});
