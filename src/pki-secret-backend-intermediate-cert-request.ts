// https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendIntermediateCertRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of alternative names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#alt_names PkiSecretBackendIntermediateCertRequest#alt_names}
  */
  readonly altNames?: string[];
  /**
  * The PKI secret backend the resource belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#backend PkiSecretBackendIntermediateCertRequest#backend}
  */
  readonly backend: string;
  /**
  * CN of intermediate to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#common_name PkiSecretBackendIntermediateCertRequest#common_name}
  */
  readonly commonName: string;
  /**
  * The country.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#country PkiSecretBackendIntermediateCertRequest#country}
  */
  readonly country?: string;
  /**
  * Flag to exclude CN from SANs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#exclude_cn_from_sans PkiSecretBackendIntermediateCertRequest#exclude_cn_from_sans}
  */
  readonly excludeCnFromSans?: boolean | cdktf.IResolvable;
  /**
  * The format of data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#format PkiSecretBackendIntermediateCertRequest#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#id PkiSecretBackendIntermediateCertRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of alternative IPs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#ip_sans PkiSecretBackendIntermediateCertRequest#ip_sans}
  */
  readonly ipSans?: string[];
  /**
  * The number of bits to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#key_bits PkiSecretBackendIntermediateCertRequest#key_bits}
  */
  readonly keyBits?: number;
  /**
  * The desired key type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#key_type PkiSecretBackendIntermediateCertRequest#key_type}
  */
  readonly keyType?: string;
  /**
  * The locality.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#locality PkiSecretBackendIntermediateCertRequest#locality}
  */
  readonly locality?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#namespace PkiSecretBackendIntermediateCertRequest#namespace}
  */
  readonly namespace?: string;
  /**
  * The organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#organization PkiSecretBackendIntermediateCertRequest#organization}
  */
  readonly organization?: string;
  /**
  * List of other SANs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#other_sans PkiSecretBackendIntermediateCertRequest#other_sans}
  */
  readonly otherSans?: string[];
  /**
  * The organization unit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#ou PkiSecretBackendIntermediateCertRequest#ou}
  */
  readonly ou?: string;
  /**
  * The postal code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#postal_code PkiSecretBackendIntermediateCertRequest#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The private key format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#private_key_format PkiSecretBackendIntermediateCertRequest#private_key_format}
  */
  readonly privateKeyFormat?: string;
  /**
  * The province.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#province PkiSecretBackendIntermediateCertRequest#province}
  */
  readonly province?: string;
  /**
  * The street address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#street_address PkiSecretBackendIntermediateCertRequest#street_address}
  */
  readonly streetAddress?: string;
  /**
  * Type of intermediate to create. Must be either "exported" or "internal".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#type PkiSecretBackendIntermediateCertRequest#type}
  */
  readonly type: string;
  /**
  * List of alternative URIs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request#uri_sans PkiSecretBackendIntermediateCertRequest#uri_sans}
  */
  readonly uriSans?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request vault_pki_secret_backend_intermediate_cert_request}
*/
export class PkiSecretBackendIntermediateCertRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_intermediate_cert_request";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_intermediate_cert_request vault_pki_secret_backend_intermediate_cert_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendIntermediateCertRequestConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendIntermediateCertRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_intermediate_cert_request',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.8.0',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._altNames = config.altNames;
    this._backend = config.backend;
    this._commonName = config.commonName;
    this._country = config.country;
    this._excludeCnFromSans = config.excludeCnFromSans;
    this._format = config.format;
    this._id = config.id;
    this._ipSans = config.ipSans;
    this._keyBits = config.keyBits;
    this._keyType = config.keyType;
    this._locality = config.locality;
    this._namespace = config.namespace;
    this._organization = config.organization;
    this._otherSans = config.otherSans;
    this._ou = config.ou;
    this._postalCode = config.postalCode;
    this._privateKeyFormat = config.privateKeyFormat;
    this._province = config.province;
    this._streetAddress = config.streetAddress;
    this._type = config.type;
    this._uriSans = config.uriSans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alt_names - computed: false, optional: true, required: false
  private _altNames?: string[]; 
  public get altNames() {
    return this.getListAttribute('alt_names');
  }
  public set altNames(value: string[]) {
    this._altNames = value;
  }
  public resetAltNames() {
    this._altNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNamesInput() {
    return this._altNames;
  }

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // exclude_cn_from_sans - computed: false, optional: true, required: false
  private _excludeCnFromSans?: boolean | cdktf.IResolvable; 
  public get excludeCnFromSans() {
    return this.getBooleanAttribute('exclude_cn_from_sans');
  }
  public set excludeCnFromSans(value: boolean | cdktf.IResolvable) {
    this._excludeCnFromSans = value;
  }
  public resetExcludeCnFromSans() {
    this._excludeCnFromSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCnFromSansInput() {
    return this._excludeCnFromSans;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_sans - computed: false, optional: true, required: false
  private _ipSans?: string[]; 
  public get ipSans() {
    return this.getListAttribute('ip_sans');
  }
  public set ipSans(value: string[]) {
    this._ipSans = value;
  }
  public resetIpSans() {
    this._ipSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSansInput() {
    return this._ipSans;
  }

  // key_bits - computed: false, optional: true, required: false
  private _keyBits?: number; 
  public get keyBits() {
    return this.getNumberAttribute('key_bits');
  }
  public set keyBits(value: number) {
    this._keyBits = value;
  }
  public resetKeyBits() {
    this._keyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBitsInput() {
    return this._keyBits;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // other_sans - computed: false, optional: true, required: false
  private _otherSans?: string[]; 
  public get otherSans() {
    return this.getListAttribute('other_sans');
  }
  public set otherSans(value: string[]) {
    this._otherSans = value;
  }
  public resetOtherSans() {
    this._otherSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSansInput() {
    return this._otherSans;
  }

  // ou - computed: false, optional: true, required: false
  private _ou?: string; 
  public get ou() {
    return this.getStringAttribute('ou');
  }
  public set ou(value: string) {
    this._ou = value;
  }
  public resetOu() {
    this._ou = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_format - computed: false, optional: true, required: false
  private _privateKeyFormat?: string; 
  public get privateKeyFormat() {
    return this.getStringAttribute('private_key_format');
  }
  public set privateKeyFormat(value: string) {
    this._privateKeyFormat = value;
  }
  public resetPrivateKeyFormat() {
    this._privateKeyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFormatInput() {
    return this._privateKeyFormat;
  }

  // private_key_type - computed: true, optional: false, required: false
  public get privateKeyType() {
    return this.getStringAttribute('private_key_type');
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri_sans - computed: false, optional: true, required: false
  private _uriSans?: string[]; 
  public get uriSans() {
    return this.getListAttribute('uri_sans');
  }
  public set uriSans(value: string[]) {
    this._uriSans = value;
  }
  public resetUriSans() {
    this._uriSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriSansInput() {
    return this._uriSans;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._altNames),
      backend: cdktf.stringToTerraform(this._backend),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.stringToTerraform(this._country),
      exclude_cn_from_sans: cdktf.booleanToTerraform(this._excludeCnFromSans),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      ip_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSans),
      key_bits: cdktf.numberToTerraform(this._keyBits),
      key_type: cdktf.stringToTerraform(this._keyType),
      locality: cdktf.stringToTerraform(this._locality),
      namespace: cdktf.stringToTerraform(this._namespace),
      organization: cdktf.stringToTerraform(this._organization),
      other_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._otherSans),
      ou: cdktf.stringToTerraform(this._ou),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      private_key_format: cdktf.stringToTerraform(this._privateKeyFormat),
      province: cdktf.stringToTerraform(this._province),
      street_address: cdktf.stringToTerraform(this._streetAddress),
      type: cdktf.stringToTerraform(this._type),
      uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uriSans),
    };
  }
}
