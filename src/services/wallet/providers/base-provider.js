class BaseWalletProvider {
  get name () {
    throw new Error('Classes that extend BaseWalletProvider must implement this method')
  }

  /**
   * Returns the addresses of all accounts in this wallet.
   * @return {*} List of addresses in this wallet
   */
  async getAccounts () {
    throw new Error('Classes that extend BaseWalletProvider must implement this method')
  }

  /**
   * Signs a piece of arbitrary data.
   * @param {*} data Data to sign
   * @return {*} Signature over the data.
   */
  async sign (data) {
    throw new Error('Classes that extend BaseWalletProvider must implement this method')
  }
}

module.exports = BaseWalletProvider