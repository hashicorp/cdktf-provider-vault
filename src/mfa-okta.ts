// https://www.terraform.io/docs/providers/vault/r/mfa_okta
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MfaOktaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Okta API key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta#api_token MfaOkta#api_token}
  */
  readonly apiToken: string;
  /**
  * If set, will be used as the base domain for API requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta#base_url MfaOkta#base_url}
  */
  readonly baseUrl?: string;
  /**
  * ID computed by Vault.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta#id MfaOkta#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The mount to tie this method to for use in automatic mappings. The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta#mount_accessor MfaOkta#mount_accessor}
  */
  readonly mountAccessor: string;
  /**
  * Name of the MFA method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta#name MfaOkta#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta#namespace MfaOkta#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the organization to be used in the Okta API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta#org_name MfaOkta#org_name}
  */
  readonly orgName: string;
  /**
  * If set to true, the username will only match the primary email for the account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta#primary_email MfaOkta#primary_email}
  */
  readonly primaryEmail?: boolean | cdktf.IResolvable;
  /**
  * A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta#username_format MfaOkta#username_format}
  */
  readonly usernameFormat?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta vault_mfa_okta}
*/
export class MfaOkta extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_mfa_okta";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/mfa_okta vault_mfa_okta} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MfaOktaConfig
  */
  public constructor(scope: Construct, id: string, config: MfaOktaConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_mfa_okta',
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
    this._apiToken = config.apiToken;
    this._baseUrl = config.baseUrl;
    this._id = config.id;
    this._mountAccessor = config.mountAccessor;
    this._name = config.name;
    this._namespace = config.namespace;
    this._orgName = config.orgName;
    this._primaryEmail = config.primaryEmail;
    this._usernameFormat = config.usernameFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
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

  // mount_accessor - computed: false, optional: false, required: true
  private _mountAccessor?: string; 
  public get mountAccessor() {
    return this.getStringAttribute('mount_accessor');
  }
  public set mountAccessor(value: string) {
    this._mountAccessor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountAccessorInput() {
    return this._mountAccessor;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // org_name - computed: false, optional: false, required: true
  private _orgName?: string; 
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
  public set orgName(value: string) {
    this._orgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
  }

  // primary_email - computed: false, optional: true, required: false
  private _primaryEmail?: boolean | cdktf.IResolvable; 
  public get primaryEmail() {
    return this.getBooleanAttribute('primary_email');
  }
  public set primaryEmail(value: boolean | cdktf.IResolvable) {
    this._primaryEmail = value;
  }
  public resetPrimaryEmail() {
    this._primaryEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEmailInput() {
    return this._primaryEmail;
  }

  // username_format - computed: false, optional: true, required: false
  private _usernameFormat?: string; 
  public get usernameFormat() {
    return this.getStringAttribute('username_format');
  }
  public set usernameFormat(value: string) {
    this._usernameFormat = value;
  }
  public resetUsernameFormat() {
    this._usernameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFormatInput() {
    return this._usernameFormat;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      id: cdktf.stringToTerraform(this._id),
      mount_accessor: cdktf.stringToTerraform(this._mountAccessor),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      org_name: cdktf.stringToTerraform(this._orgName),
      primary_email: cdktf.booleanToTerraform(this._primaryEmail),
      username_format: cdktf.stringToTerraform(this._usernameFormat),
    };
  }
}
