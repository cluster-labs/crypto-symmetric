const assert = require('chai').assert
const symmetric = require('../src')

describe('symmetric encryption & decryption' , () =>{
    
    const keyLength = 32, ivLength = 16, data = "crypto-symmetric is awesome", AES_256_CBC = 'aes-256-cbc';

    it('symmtric should generate a secret key with specific length', () => {
        const key = symmetric.generateRandomKey(keyLength)
        assert.equal(key.byteLength, keyLength, 'Key with inValid length generated')
    })

    it('symmtric should generate a Initialization vector(iv) with specific length', () => {
        const iv = symmetric.generateRandomIV(ivLength)
        assert.equal(iv.byteLength, ivLength, 'iv with inValid length generated')
    })

    it('symmetric should encrypt and decrypt', () => {   
        const key = symmetric.generateRandomKey(keyLength)
        const iv = symmetric.generateRandomIV(ivLength)
        const encryptedData = symmetric.encrypt(data, AES_256_CBC, key, iv)
        const decryptedData = symmetric.decrypt(encryptedData, AES_256_CBC, key)
        assert.equal(data, decryptedData, 'symmetric encryption & decryption failed')
    })
})