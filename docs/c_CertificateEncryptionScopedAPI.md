CertificateEncryption
---------------------

APIs available for encrypting certificates in scoped applications.

Use these methods to generate a hash for the certificate, sign data using a private key, and generate a message authentication code.

#### CertificateEncryption()

Instantiates a CertificateEncryption object in a scoped application.

#### generateMac(String key, String algorithm, String data)

Generates the Message Authentication Code (MAC), which is used to authenticate a message.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| key | String | Key used to sign the message. |
| algorithm | String | Algorithm used to generate the MAC: HmacSHA256, HmacSHA1, HmacMD5, and so on. |
| data | String | Data to be processed. |

Return:

| Type | Description |
| --- | --- |
| String | MAC in base64 format. |

Example

    var mac = new CertificateEncryption;
    mac.generateMac("sample_key", "HmacSHA256", "sample_data");

Output

#### getThumbPrint(String certificateID, String algorithm)

Generates a hash (SHA-1, SHA-256, and so on) for the certificate from Trust Store Cert.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| certificateID | String | sys\_id of the certificate record in the X.509 Certificate \[sys\_certificate\] table. |
| algorithm | String | SHA-1, SHA-256, and so on |

Return:

| Type | Description |
| --- | --- |
| String | Thumbprint in base64 format. |

#### getThumbPrintFromKeystore(String certificateID, String alias, String algorithm)

Generates a hash (SHA-1, SHA-256, and so on) for the certificate from the keystore entry.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| certificateID | String | sys\_id of the certificate record in the X.509 Certificate \[sys\_certificate\] table. |
| alias | String | Alias name for the certificate. |
| algorithm | String | SHA-1, SHA-256, and so on. |

Return:

| Type | Description |
| --- | --- |
| String | Thumbprint in base64 format. |

#### sign(String certificateID, String alias, String aliaspassword, String algorithm, String datatosign)

Signs the data using the private key and the given algorithm.

Parameter(s):

| Name | Type | Description |
| --- | --- | --- |
| certificateID | String | sys\_id of the certificate record in the X.509 Certificate \[sys\_certificate\] table. |
| alias | String | Private key name. |
| aliaspassword | String | Password for the private key. |
| datatosign | String | Data to sign. |
| algorithm | String | SHA-1, SHA-256, and so on. |

Return:

| Type | Description |
| --- | --- |
| String | Signed data in base64 format. |

Example

    var ce = new CertificateEncryption;
    ce.sign("recordID", "alias", "password", "SHA-1", "sign this data");

Output