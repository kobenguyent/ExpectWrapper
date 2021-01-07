import expect = require('expect');

const ExpectWrapper = {
  async assertEqual(a: any, b: any): Promise<any> {
    return expect(a).toEqual(b);
  },

  async assertNotEqual(a: any, b: any): Promise<any> {
    return expect(a).not.toEqual(b);
  },

  async assertContain(a: any, b: any): Promise<any> {
    return expect(a).toContain(b);
  },

  async assertGreaterThan(a: any, b: any): Promise<any> {
    return expect(a).toBeGreaterThan(b);
  },

  async assertNotEmpty(a: any): Promise<any> {
    return expect(a).not.toEqual('');
  },

  async assertToBeTrue(a: any): Promise<any> {
    return expect(a).toBeTruthy;
  },

  async assertToBeFalse(a: any): Promise<any> {
    return expect(a).toBeFalsy;
  },

  async assertNotContain(a: any, b: any): Promise<any> {
    return expect(a).not.toContain(b);
  },
};

export default ExpectWrapper;
