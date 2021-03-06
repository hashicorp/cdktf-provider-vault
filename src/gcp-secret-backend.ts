// https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpSecretBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON-encoded credentials to use to connect to GCP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend#credentials GcpSecretBackend#credentials}
  */
  readonly credentials?: string;
  /**
  * Default lease duration for secrets in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend#default_lease_ttl_seconds GcpSecretBackend#default_lease_ttl_seconds}
  */
  readonly defaultLeaseTtlSeconds?: number;
  /**
  * Human-friendly description of the mount for the backend.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend#description GcpSecretBackend#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend#id GcpSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Local mount flag that can be explicitly set to true to enforce local mount in HA environment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend#local GcpSecretBackend#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Maximum possible lease duration for secrets in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend#max_lease_ttl_seconds GcpSecretBackend#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend#namespace GcpSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Path to mount the backend at.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend#path GcpSecretBackend#path}
  */
  readonly path?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend vault_gcp_secret_backend}
*/
export class GcpSecretBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcp_secret_backend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_backend vault_gcp_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpSecretBackendConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GcpSecretBackendConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_gcp_secret_backend',
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
    this._credentials = config.credentials;
    this._defaultLeaseTtlSeconds = config.defaultLeaseTtlSeconds;
    this._description = config.description;
    this._id = config.id;
    this._local = config.local;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._namespace = config.namespace;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // default_lease_ttl_seconds - computed: false, optional: true, required: false
  private _defaultLeaseTtlSeconds?: number; 
  public get defaultLeaseTtlSeconds() {
    return this.getNumberAttribute('default_lease_ttl_seconds');
  }
  public set defaultLeaseTtlSeconds(value: number) {
    this._defaultLeaseTtlSeconds = value;
  }
  public resetDefaultLeaseTtlSeconds() {
    this._defaultLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTtlSecondsInput() {
    return this._defaultLeaseTtlSeconds;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // max_lease_ttl_seconds - computed: false, optional: true, required: false
  private _maxLeaseTtlSeconds?: number; 
  public get maxLeaseTtlSeconds() {
    return this.getNumberAttribute('max_lease_ttl_seconds');
  }
  public set maxLeaseTtlSeconds(value: number) {
    this._maxLeaseTtlSeconds = value;
  }
  public resetMaxLeaseTtlSeconds() {
    this._maxLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlSecondsInput() {
    return this._maxLeaseTtlSeconds;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials: cdktf.stringToTerraform(this._credentials),
      default_lease_ttl_seconds: cdktf.numberToTerraform(this._defaultLeaseTtlSeconds),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      local: cdktf.booleanToTerraform(this._local),
      max_lease_ttl_seconds: cdktf.numberToTerraform(this._maxLeaseTtlSeconds),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
    };
  }
}
