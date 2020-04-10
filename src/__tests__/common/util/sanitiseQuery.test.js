import { sanitiseQuery } from "../../../common/util";
describe("sanitiseQuery", () => {
  test("empty string", () => {
    const sanitisedQuery = sanitiseQuery("");
    expect(sanitisedQuery).toEqual("");
  });

  test("it should remove any spaces", () => {
    const sanitisedQuery = sanitiseQuery(
      "    THIS TEST IF    FOR MAKE   QUERY LOWERCASE   "
    );
    expect(sanitisedQuery).toEqual("this+test+if+for+make+query+lowercase");
  });

  test("it should make the query lowercase", () => {
    const sanitisedQuery = sanitiseQuery(
      "THIS TEST IS FOR MAKE QUERY LOWERCASE"
    );
    expect(sanitisedQuery).toEqual("this+test+is+for+make+query+lowercase");
  });

  //It should repalce anything input with "" if they are not a-z, A-Z, 0-9
  test("only accept letters and numbers", () => {
    const sanitisedQuery = sanitiseQuery(
      ",./@@THIS TEST ONLY ACCEPT LETTERS AND NUMBERS"
    );
    expect(sanitisedQuery).toEqual("this+test+only+accept+letters+and+numbers");
  });

  //It should split each word with '+'
  test("it should split each word with '+'", () => {
    const sanitisedQuery = sanitiseQuery("this is a nice query");
    expect(sanitisedQuery).toEqual("this+is+a+nice+query");
  });

  test("limits to 10 words", () => {
    const sanitisedQuery = sanitiseQuery(
      "this test is for testing if the query can accept more than ten words"
    );
    expect(sanitisedQuery).toEqual(
      "this+test+is+for+testing+if+the+query+can+accept"
    );
  });

  test("random letters", () => {
    const sanitisedQuery = sanitiseQuery("thisisanicetest");
    expect(sanitisedQuery).toEqual("thisisanicetest");
  });
});
