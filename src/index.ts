import expect from "expect";

class ExpectWrapper {
	/**
	 * @param {*} actualValue
	 * @param {*} expectedValue
	 * @returns {*}
	 */
	async expectEqual(actualValue: any, expectedValue: any): Promise<any> {
		return expect(actualValue).toEqual(expectedValue);
	}

	/**
	 * @param {*} actualValue
	 * @param {*} expectedValue
	 * @returns {*}
	 */
	async expectNotEqual(actualValue: any, expectedValue: any): Promise<any> {
		return expect(actualValue).not.toEqual(expectedValue);
	}

	/**
	 * @param {*} actualValue
	 * @param {*} expectedValue
	 * @returns {*}
	 */
	async expectContain(actualValue: any, expectedValue: any): Promise<any> {
		return expect(actualValue).toContain(expectedValue);
	}

	/**
	 * @param {*} actualValue
	 * @param {*} expectedValue
	 * @returns {*}
	 */
	async expectGreaterThan(actualValue: any, expectedValue: any): Promise<any> {
		return expect(actualValue).toBeGreaterThan(expectedValue);
	}

	/**
	 * @param {*} a
	 * @returns {*}
	 */
	async expectNotEmpty(a: any): Promise<any> {
		return expect(a).not.toEqual("");
	}

	/**
	 * @param {*} a
	 * @returns {*}
	 */
	async expectToBeTrue(a: any): Promise<any> {
		return expect(a).toBeTruthy();
	}

	/**
	 * @param {*} a
	 * @returns {*}
	 */
	async expectToBeFalse(a: any): Promise<any> {
		return expect(a).toBeFalsy();
	}

	/**
	 * @param {*} actualValue
	 * @param {*} expectedValue
	 * @returns {*}
	 */
	async expectNotContain(actualValue: any, expectedValue: any): Promise<any> {
		return expect(actualValue).not.toContain(expectedValue);
	}

  /**
   * Expect object to have property with expected value if passed
   * @param {*} object
   * @param {*} property
   * @param {*} [value]
   * @returns {*}
   */
	async expectToHaveProperty(object: any, property: any, value?: any): Promise<any> {
	  return expect(object).toHaveProperty(property, value)
    }
}

export = ExpectWrapper;
