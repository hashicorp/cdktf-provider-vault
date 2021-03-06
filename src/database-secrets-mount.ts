// https://www.terraform.io/docs/providers/vault/r/database_secrets_mount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseSecretsMountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#audit_non_hmac_request_keys DatabaseSecretsMount#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#audit_non_hmac_response_keys DatabaseSecretsMount#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Default lease duration for tokens and secrets in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#default_lease_ttl_seconds DatabaseSecretsMount#default_lease_ttl_seconds}
  */
  readonly defaultLeaseTtlSeconds?: number;
  /**
  * Human-friendly description of the mount
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#description DatabaseSecretsMount#description}
  */
  readonly description?: string;
  /**
  * Enable the secrets engine to access Vault's external entropy source
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#external_entropy_access DatabaseSecretsMount#external_entropy_access}
  */
  readonly externalEntropyAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#id DatabaseSecretsMount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Local mount flag that can be explicitly set to true to enforce local mount in HA environment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#local DatabaseSecretsMount#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Maximum possible lease duration for tokens and secrets in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_lease_ttl_seconds DatabaseSecretsMount#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#namespace DatabaseSecretsMount#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies mount type specific options that are passed to the backend
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#options DatabaseSecretsMount#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Where the secret backend will be mounted
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#path DatabaseSecretsMount#path}
  */
  readonly path: string;
  /**
  * Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#seal_wrap DatabaseSecretsMount#seal_wrap}
  */
  readonly sealWrap?: boolean | cdktf.IResolvable;
  /**
  * cassandra block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#cassandra DatabaseSecretsMount#cassandra}
  */
  readonly cassandra?: DatabaseSecretsMountCassandra[] | cdktf.IResolvable;
  /**
  * couchbase block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#couchbase DatabaseSecretsMount#couchbase}
  */
  readonly couchbase?: DatabaseSecretsMountCouchbase[] | cdktf.IResolvable;
  /**
  * elasticsearch block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#elasticsearch DatabaseSecretsMount#elasticsearch}
  */
  readonly elasticsearch?: DatabaseSecretsMountElasticsearch[] | cdktf.IResolvable;
  /**
  * hana block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#hana DatabaseSecretsMount#hana}
  */
  readonly hana?: DatabaseSecretsMountHana[] | cdktf.IResolvable;
  /**
  * influxdb block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#influxdb DatabaseSecretsMount#influxdb}
  */
  readonly influxdb?: DatabaseSecretsMountInfluxdb[] | cdktf.IResolvable;
  /**
  * mongodb block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mongodb DatabaseSecretsMount#mongodb}
  */
  readonly mongodb?: DatabaseSecretsMountMongodb[] | cdktf.IResolvable;
  /**
  * mongodbatlas block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mongodbatlas DatabaseSecretsMount#mongodbatlas}
  */
  readonly mongodbatlas?: DatabaseSecretsMountMongodbatlas[] | cdktf.IResolvable;
  /**
  * mssql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mssql DatabaseSecretsMount#mssql}
  */
  readonly mssql?: DatabaseSecretsMountMssql[] | cdktf.IResolvable;
  /**
  * mysql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mysql DatabaseSecretsMount#mysql}
  */
  readonly mysql?: DatabaseSecretsMountMysql[] | cdktf.IResolvable;
  /**
  * mysql_aurora block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mysql_aurora DatabaseSecretsMount#mysql_aurora}
  */
  readonly mysqlAurora?: DatabaseSecretsMountMysqlAurora[] | cdktf.IResolvable;
  /**
  * mysql_legacy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mysql_legacy DatabaseSecretsMount#mysql_legacy}
  */
  readonly mysqlLegacy?: DatabaseSecretsMountMysqlLegacy[] | cdktf.IResolvable;
  /**
  * mysql_rds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#mysql_rds DatabaseSecretsMount#mysql_rds}
  */
  readonly mysqlRds?: DatabaseSecretsMountMysqlRds[] | cdktf.IResolvable;
  /**
  * oracle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#oracle DatabaseSecretsMount#oracle}
  */
  readonly oracle?: DatabaseSecretsMountOracle[] | cdktf.IResolvable;
  /**
  * postgresql block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#postgresql DatabaseSecretsMount#postgresql}
  */
  readonly postgresql?: DatabaseSecretsMountPostgresql[] | cdktf.IResolvable;
  /**
  * redshift block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#redshift DatabaseSecretsMount#redshift}
  */
  readonly redshift?: DatabaseSecretsMountRedshift[] | cdktf.IResolvable;
  /**
  * snowflake block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#snowflake DatabaseSecretsMount#snowflake}
  */
  readonly snowflake?: DatabaseSecretsMountSnowflake[] | cdktf.IResolvable;
}
export interface DatabaseSecretsMountCassandra {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * The number of seconds to use as a connection timeout.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connect_timeout DatabaseSecretsMount#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Cassandra hosts to connect to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#hosts DatabaseSecretsMount#hosts}
  */
  readonly hosts?: string[];
  /**
  * Whether to skip verification of the server certificate when using TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The password to use when authenticating with Cassandra.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Concatenated PEM blocks containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#pem_bundle DatabaseSecretsMount#pem_bundle}
  */
  readonly pemBundle?: string;
  /**
  * Specifies JSON containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#pem_json DatabaseSecretsMount#pem_json}
  */
  readonly pemJson?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * The transport port to use to connect to Cassandra.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#port DatabaseSecretsMount#port}
  */
  readonly port?: number;
  /**
  * The CQL protocol version to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#protocol_version DatabaseSecretsMount#protocol_version}
  */
  readonly protocolVersion?: number;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * Whether to use TLS when connecting to Cassandra.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls DatabaseSecretsMount#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * The username to use when authenticating with Cassandra.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountCassandraToTerraform(struct?: DatabaseSecretsMountCassandra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    insecure_tls: cdktf.booleanToTerraform(struct!.insecureTls),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    pem_bundle: cdktf.stringToTerraform(struct!.pemBundle),
    pem_json: cdktf.stringToTerraform(struct!.pemJson),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    port: cdktf.numberToTerraform(struct!.port),
    protocol_version: cdktf.numberToTerraform(struct!.protocolVersion),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    tls: cdktf.booleanToTerraform(struct!.tls),
    username: cdktf.stringToTerraform(struct!.username),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountCassandraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountCassandra | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._insecureTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureTls = this._insecureTls;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pemBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemBundle = this._pemBundle;
    }
    if (this._pemJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemJson = this._pemJson;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVersion = this._protocolVersion;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountCassandra | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectTimeout = undefined;
      this._data = undefined;
      this._hosts = undefined;
      this._insecureTls = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pemBundle = undefined;
      this._pemJson = undefined;
      this._pluginName = undefined;
      this._port = undefined;
      this._protocolVersion = undefined;
      this._rootRotationStatements = undefined;
      this._tls = undefined;
      this._username = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectTimeout = value.connectTimeout;
      this._data = value.data;
      this._hosts = value.hosts;
      this._insecureTls = value.insecureTls;
      this._name = value.name;
      this._password = value.password;
      this._pemBundle = value.pemBundle;
      this._pemJson = value.pemJson;
      this._pluginName = value.pluginName;
      this._port = value.port;
      this._protocolVersion = value.protocolVersion;
      this._rootRotationStatements = value.rootRotationStatements;
      this._tls = value.tls;
      this._username = value.username;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pem_bundle - computed: false, optional: true, required: false
  private _pemBundle?: string; 
  public get pemBundle() {
    return this.getStringAttribute('pem_bundle');
  }
  public set pemBundle(value: string) {
    this._pemBundle = value;
  }
  public resetPemBundle() {
    this._pemBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemBundleInput() {
    return this._pemBundle;
  }

  // pem_json - computed: false, optional: true, required: false
  private _pemJson?: string; 
  public get pemJson() {
    return this.getStringAttribute('pem_json');
  }
  public set pemJson(value: string) {
    this._pemJson = value;
  }
  public resetPemJson() {
    this._pemJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemJsonInput() {
    return this._pemJson;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol_version - computed: false, optional: true, required: false
  private _protocolVersion?: number; 
  public get protocolVersion() {
    return this.getNumberAttribute('protocol_version');
  }
  public set protocolVersion(value: number) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountCassandraList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountCassandra[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountCassandraOutputReference {
    return new DatabaseSecretsMountCassandraOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountCouchbase {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Required if `tls` is `true`. Specifies the certificate authority of the Couchbase server, as a PEM certificate that has been base64 encoded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#base64_pem DatabaseSecretsMount#base64_pem}
  */
  readonly base64Pem?: string;
  /**
  * Required for Couchbase versions prior to 6.5.0. This is only used to verify vault's connection to the server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#bucket_name DatabaseSecretsMount#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * A set of Couchbase URIs to connect to. Must use `couchbases://` scheme if `tls` is `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#hosts DatabaseSecretsMount#hosts}
  */
  readonly hosts: string[];
  /**
  *  Specifies whether to skip verification of the server certificate when using TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * Specifies the password corresponding to the given username.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * Specifies whether to use TLS when connecting to Couchbase.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls DatabaseSecretsMount#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the username for Vault to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username: string;
  /**
  * Template describing how dynamic usernames are generated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountCouchbaseToTerraform(struct?: DatabaseSecretsMountCouchbase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    base64_pem: cdktf.stringToTerraform(struct!.base64Pem),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    insecure_tls: cdktf.booleanToTerraform(struct!.insecureTls),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    tls: cdktf.booleanToTerraform(struct!.tls),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountCouchbaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountCouchbase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._base64Pem !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Pem = this._base64Pem;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._insecureTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureTls = this._insecureTls;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountCouchbase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._base64Pem = undefined;
      this._bucketName = undefined;
      this._data = undefined;
      this._hosts = undefined;
      this._insecureTls = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._tls = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._base64Pem = value.base64Pem;
      this._bucketName = value.bucketName;
      this._data = value.data;
      this._hosts = value.hosts;
      this._insecureTls = value.insecureTls;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._tls = value.tls;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // base64_pem - computed: false, optional: true, required: false
  private _base64Pem?: string; 
  public get base64Pem() {
    return this.getStringAttribute('base64_pem');
  }
  public set base64Pem(value: string) {
    this._base64Pem = value;
  }
  public resetBase64Pem() {
    this._base64Pem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64PemInput() {
    return this._base64Pem;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountCouchbaseList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountCouchbase[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountCouchbaseOutputReference {
    return new DatabaseSecretsMountCouchbaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountElasticsearch {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * The path to a PEM-encoded CA cert file to use to verify the Elasticsearch server's identity
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#ca_cert DatabaseSecretsMount#ca_cert}
  */
  readonly caCert?: string;
  /**
  * The path to a directory of PEM-encoded CA cert files to use to verify the Elasticsearch server's identity
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#ca_path DatabaseSecretsMount#ca_path}
  */
  readonly caPath?: string;
  /**
  * The path to the certificate for the Elasticsearch client to present for communication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#client_cert DatabaseSecretsMount#client_cert}
  */
  readonly clientCert?: string;
  /**
  * The path to the key for the Elasticsearch client to use for communication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#client_key DatabaseSecretsMount#client_key}
  */
  readonly clientKey?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Whether to disable certificate verification
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#insecure DatabaseSecretsMount#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The password to be used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * This, if set, is used to set the SNI host when connecting via TLS
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls_server_name DatabaseSecretsMount#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * The URL for Elasticsearch's API
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#url DatabaseSecretsMount#url}
  */
  readonly url: string;
  /**
  * The username to be used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username: string;
  /**
  * Template describing how dynamic usernames are generated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountElasticsearchToTerraform(struct?: DatabaseSecretsMountElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    tls_server_name: cdktf.stringToTerraform(struct!.tlsServerName),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountElasticsearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._tlsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServerName = this._tlsServerName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._caCert = undefined;
      this._caPath = undefined;
      this._clientCert = undefined;
      this._clientKey = undefined;
      this._data = undefined;
      this._insecure = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._tlsServerName = undefined;
      this._url = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._caCert = value.caCert;
      this._caPath = value.caPath;
      this._clientCert = value.clientCert;
      this._clientKey = value.clientKey;
      this._data = value.data;
      this._insecure = value.insecure;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._tlsServerName = value.tlsServerName;
      this._url = value.url;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountElasticsearchList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountElasticsearch[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountElasticsearchOutputReference {
    return new DatabaseSecretsMountElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountHana {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Disable special character escaping in username and password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountHanaToTerraform(struct?: DatabaseSecretsMountHana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    disable_escaping: cdktf.booleanToTerraform(struct!.disableEscaping),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    username: cdktf.stringToTerraform(struct!.username),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountHanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountHana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._disableEscaping !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEscaping = this._disableEscaping;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountHana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._data = undefined;
      this._disableEscaping = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._username = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._data = value.data;
      this._disableEscaping = value.disableEscaping;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._username = value.username;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // disable_escaping - computed: false, optional: true, required: false
  private _disableEscaping?: boolean | cdktf.IResolvable; 
  public get disableEscaping() {
    return this.getBooleanAttribute('disable_escaping');
  }
  public set disableEscaping(value: boolean | cdktf.IResolvable) {
    this._disableEscaping = value;
  }
  public resetDisableEscaping() {
    this._disableEscaping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEscapingInput() {
    return this._disableEscaping;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountHanaList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountHana[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountHanaOutputReference {
    return new DatabaseSecretsMountHanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountInfluxdb {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * The number of seconds to use as a connection timeout.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connect_timeout DatabaseSecretsMount#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Influxdb host to connect to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#host DatabaseSecretsMount#host}
  */
  readonly host: string;
  /**
  * Whether to skip verification of the server certificate when using TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#insecure_tls DatabaseSecretsMount#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * Specifies the password corresponding to the given username.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password: string;
  /**
  * Concatenated PEM blocks containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#pem_bundle DatabaseSecretsMount#pem_bundle}
  */
  readonly pemBundle?: string;
  /**
  * Specifies JSON containing a certificate and private key; a certificate, private key, and issuing CA certificate; or just a CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#pem_json DatabaseSecretsMount#pem_json}
  */
  readonly pemJson?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * The transport port to use to connect to Influxdb.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#port DatabaseSecretsMount#port}
  */
  readonly port?: number;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * Whether to use TLS when connecting to Influxdb.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls DatabaseSecretsMount#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the username to use for superuser access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username: string;
  /**
  * Template describing how dynamic usernames are generated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountInfluxdbToTerraform(struct?: DatabaseSecretsMountInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    host: cdktf.stringToTerraform(struct!.host),
    insecure_tls: cdktf.booleanToTerraform(struct!.insecureTls),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    pem_bundle: cdktf.stringToTerraform(struct!.pemBundle),
    pem_json: cdktf.stringToTerraform(struct!.pemJson),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    port: cdktf.numberToTerraform(struct!.port),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    tls: cdktf.booleanToTerraform(struct!.tls),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountInfluxdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountInfluxdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._insecureTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureTls = this._insecureTls;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pemBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemBundle = this._pemBundle;
    }
    if (this._pemJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemJson = this._pemJson;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountInfluxdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectTimeout = undefined;
      this._data = undefined;
      this._host = undefined;
      this._insecureTls = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pemBundle = undefined;
      this._pemJson = undefined;
      this._pluginName = undefined;
      this._port = undefined;
      this._rootRotationStatements = undefined;
      this._tls = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectTimeout = value.connectTimeout;
      this._data = value.data;
      this._host = value.host;
      this._insecureTls = value.insecureTls;
      this._name = value.name;
      this._password = value.password;
      this._pemBundle = value.pemBundle;
      this._pemJson = value.pemJson;
      this._pluginName = value.pluginName;
      this._port = value.port;
      this._rootRotationStatements = value.rootRotationStatements;
      this._tls = value.tls;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pem_bundle - computed: false, optional: true, required: false
  private _pemBundle?: string; 
  public get pemBundle() {
    return this.getStringAttribute('pem_bundle');
  }
  public set pemBundle(value: string) {
    this._pemBundle = value;
  }
  public resetPemBundle() {
    this._pemBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemBundleInput() {
    return this._pemBundle;
  }

  // pem_json - computed: false, optional: true, required: false
  private _pemJson?: string; 
  public get pemJson() {
    return this.getStringAttribute('pem_json');
  }
  public set pemJson(value: string) {
    this._pemJson = value;
  }
  public resetPemJson() {
    this._pemJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemJsonInput() {
    return this._pemJson;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountInfluxdbList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountInfluxdb[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountInfluxdbOutputReference {
    return new DatabaseSecretsMountInfluxdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountMongodb {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountMongodbToTerraform(struct?: DatabaseSecretsMountMongodb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountMongodbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountMongodb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountMongodb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._data = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._data = value.data;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountMongodbList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountMongodb[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountMongodbOutputReference {
    return new DatabaseSecretsMountMongodbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountMongodbatlas {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * The Private Programmatic API Key used to connect with MongoDB Atlas API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#private_key DatabaseSecretsMount#private_key}
  */
  readonly privateKey: string;
  /**
  * The Project ID the Database User should be created within.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#project_id DatabaseSecretsMount#project_id}
  */
  readonly projectId: string;
  /**
  * The Public Programmatic API Key used to authenticate with the MongoDB Atlas API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#public_key DatabaseSecretsMount#public_key}
  */
  readonly publicKey: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountMongodbatlasToTerraform(struct?: DatabaseSecretsMountMongodbatlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountMongodbatlasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountMongodbatlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountMongodbatlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._data = undefined;
      this._name = undefined;
      this._pluginName = undefined;
      this._privateKey = undefined;
      this._projectId = undefined;
      this._publicKey = undefined;
      this._rootRotationStatements = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._data = value.data;
      this._name = value.name;
      this._pluginName = value.pluginName;
      this._privateKey = value.privateKey;
      this._projectId = value.projectId;
      this._publicKey = value.publicKey;
      this._rootRotationStatements = value.rootRotationStatements;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountMongodbatlasList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountMongodbatlas[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountMongodbatlasOutputReference {
    return new DatabaseSecretsMountMongodbatlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountMssql {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * Set to true when the target is a Contained Database, e.g. AzureSQL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#contained_db DatabaseSecretsMount#contained_db}
  */
  readonly containedDb?: boolean | cdktf.IResolvable;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Disable special character escaping in username and password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountMssqlToTerraform(struct?: DatabaseSecretsMountMssql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    contained_db: cdktf.booleanToTerraform(struct!.containedDb),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    disable_escaping: cdktf.booleanToTerraform(struct!.disableEscaping),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountMssqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountMssql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._containedDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.containedDb = this._containedDb;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._disableEscaping !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEscaping = this._disableEscaping;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountMssql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._containedDb = undefined;
      this._data = undefined;
      this._disableEscaping = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._containedDb = value.containedDb;
      this._data = value.data;
      this._disableEscaping = value.disableEscaping;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // contained_db - computed: false, optional: true, required: false
  private _containedDb?: boolean | cdktf.IResolvable; 
  public get containedDb() {
    return this.getBooleanAttribute('contained_db');
  }
  public set containedDb(value: boolean | cdktf.IResolvable) {
    this._containedDb = value;
  }
  public resetContainedDb() {
    this._containedDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containedDbInput() {
    return this._containedDb;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // disable_escaping - computed: false, optional: true, required: false
  private _disableEscaping?: boolean | cdktf.IResolvable; 
  public get disableEscaping() {
    return this.getBooleanAttribute('disable_escaping');
  }
  public set disableEscaping(value: boolean | cdktf.IResolvable) {
    this._disableEscaping = value;
  }
  public resetDisableEscaping() {
    this._disableEscaping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEscapingInput() {
    return this._disableEscaping;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountMssqlList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountMssql[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountMssqlOutputReference {
    return new DatabaseSecretsMountMssqlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountMysql {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * x509 CA file for validating the certificate presented by the MySQL server. Must be PEM encoded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls_ca DatabaseSecretsMount#tls_ca}
  */
  readonly tlsCa?: string;
  /**
  * x509 certificate for connecting to the database. This must be a PEM encoded version of the private key and the certificate combined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#tls_certificate_key DatabaseSecretsMount#tls_certificate_key}
  */
  readonly tlsCertificateKey?: string;
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountMysqlToTerraform(struct?: DatabaseSecretsMountMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    tls_ca: cdktf.stringToTerraform(struct!.tlsCa),
    tls_certificate_key: cdktf.stringToTerraform(struct!.tlsCertificateKey),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountMysql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._tlsCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCa = this._tlsCa;
    }
    if (this._tlsCertificateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificateKey = this._tlsCertificateKey;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountMysql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._data = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._tlsCa = undefined;
      this._tlsCertificateKey = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._data = value.data;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._tlsCa = value.tlsCa;
      this._tlsCertificateKey = value.tlsCertificateKey;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // tls_ca - computed: false, optional: true, required: false
  private _tlsCa?: string; 
  public get tlsCa() {
    return this.getStringAttribute('tls_ca');
  }
  public set tlsCa(value: string) {
    this._tlsCa = value;
  }
  public resetTlsCa() {
    this._tlsCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaInput() {
    return this._tlsCa;
  }

  // tls_certificate_key - computed: false, optional: true, required: false
  private _tlsCertificateKey?: string; 
  public get tlsCertificateKey() {
    return this.getStringAttribute('tls_certificate_key');
  }
  public set tlsCertificateKey(value: string) {
    this._tlsCertificateKey = value;
  }
  public resetTlsCertificateKey() {
    this._tlsCertificateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateKeyInput() {
    return this._tlsCertificateKey;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountMysqlList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountMysql[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountMysqlOutputReference {
    return new DatabaseSecretsMountMysqlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountMysqlAurora {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountMysqlAuroraToTerraform(struct?: DatabaseSecretsMountMysqlAurora | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountMysqlAuroraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountMysqlAurora | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountMysqlAurora | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._data = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._data = value.data;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountMysqlAuroraList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountMysqlAurora[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountMysqlAuroraOutputReference {
    return new DatabaseSecretsMountMysqlAuroraOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountMysqlLegacy {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountMysqlLegacyToTerraform(struct?: DatabaseSecretsMountMysqlLegacy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountMysqlLegacyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountMysqlLegacy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountMysqlLegacy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._data = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._data = value.data;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountMysqlLegacyList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountMysqlLegacy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountMysqlLegacyOutputReference {
    return new DatabaseSecretsMountMysqlLegacyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountMysqlRds {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountMysqlRdsToTerraform(struct?: DatabaseSecretsMountMysqlRds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountMysqlRdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountMysqlRds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountMysqlRds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._data = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._data = value.data;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountMysqlRdsList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountMysqlRds[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountMysqlRdsOutputReference {
    return new DatabaseSecretsMountMysqlRdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountOracle {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountOracleToTerraform(struct?: DatabaseSecretsMountOracle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountOracleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountOracle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountOracle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._data = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._data = value.data;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountOracleList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountOracle[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountOracleOutputReference {
    return new DatabaseSecretsMountOracleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountPostgresql {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Disable special character escaping in username and password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountPostgresqlToTerraform(struct?: DatabaseSecretsMountPostgresql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    disable_escaping: cdktf.booleanToTerraform(struct!.disableEscaping),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountPostgresql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._disableEscaping !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEscaping = this._disableEscaping;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountPostgresql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._data = undefined;
      this._disableEscaping = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._data = value.data;
      this._disableEscaping = value.disableEscaping;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // disable_escaping - computed: false, optional: true, required: false
  private _disableEscaping?: boolean | cdktf.IResolvable; 
  public get disableEscaping() {
    return this.getBooleanAttribute('disable_escaping');
  }
  public set disableEscaping(value: boolean | cdktf.IResolvable) {
    this._disableEscaping = value;
  }
  public resetDisableEscaping() {
    this._disableEscaping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEscapingInput() {
    return this._disableEscaping;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountPostgresqlList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountPostgresql[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountPostgresqlOutputReference {
    return new DatabaseSecretsMountPostgresqlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountRedshift {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Disable special character escaping in username and password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#disable_escaping DatabaseSecretsMount#disable_escaping}
  */
  readonly disableEscaping?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountRedshiftToTerraform(struct?: DatabaseSecretsMountRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    disable_escaping: cdktf.booleanToTerraform(struct!.disableEscaping),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountRedshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountRedshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._disableEscaping !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEscaping = this._disableEscaping;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountRedshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._data = undefined;
      this._disableEscaping = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._data = value.data;
      this._disableEscaping = value.disableEscaping;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // disable_escaping - computed: false, optional: true, required: false
  private _disableEscaping?: boolean | cdktf.IResolvable; 
  public get disableEscaping() {
    return this.getBooleanAttribute('disable_escaping');
  }
  public set disableEscaping(value: boolean | cdktf.IResolvable) {
    this._disableEscaping = value;
  }
  public resetDisableEscaping() {
    this._disableEscaping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEscapingInput() {
    return this._disableEscaping;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountRedshiftList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountRedshift[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountRedshiftOutputReference {
    return new DatabaseSecretsMountRedshiftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseSecretsMountSnowflake {
  /**
  * A list of roles that are allowed to use this connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#allowed_roles DatabaseSecretsMount#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Connection string to use to connect to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#connection_url DatabaseSecretsMount#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * A map of sensitive data to pass to the endpoint. Useful for templated connection strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#data DatabaseSecretsMount#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Maximum number of seconds a connection may be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_connection_lifetime DatabaseSecretsMount#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * Maximum number of idle connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_idle_connections DatabaseSecretsMount#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * Maximum number of open connections to the database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#max_open_connections DatabaseSecretsMount#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * Name of the database connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#name DatabaseSecretsMount#name}
  */
  readonly name: string;
  /**
  * The root credential password used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#password DatabaseSecretsMount#password}
  */
  readonly password?: string;
  /**
  * Specifies the name of the plugin to use for this connection. Must be prefixed with the name of one of the supported database engine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#plugin_name DatabaseSecretsMount#plugin_name}
  */
  readonly pluginName?: string;
  /**
  * A list of database statements to be executed to rotate the root user's credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#root_rotation_statements DatabaseSecretsMount#root_rotation_statements}
  */
  readonly rootRotationStatements?: string[];
  /**
  * The root credential username used in the connection URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username DatabaseSecretsMount#username}
  */
  readonly username?: string;
  /**
  * Username generation template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#username_template DatabaseSecretsMount#username_template}
  */
  readonly usernameTemplate?: string;
  /**
  * Specifies if the connection is verified during initial configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount#verify_connection DatabaseSecretsMount#verify_connection}
  */
  readonly verifyConnection?: boolean | cdktf.IResolvable;
}

export function databaseSecretsMountSnowflakeToTerraform(struct?: DatabaseSecretsMountSnowflake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRoles),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    max_connection_lifetime: cdktf.numberToTerraform(struct!.maxConnectionLifetime),
    max_idle_connections: cdktf.numberToTerraform(struct!.maxIdleConnections),
    max_open_connections: cdktf.numberToTerraform(struct!.maxOpenConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    plugin_name: cdktf.stringToTerraform(struct!.pluginName),
    root_rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rootRotationStatements),
    username: cdktf.stringToTerraform(struct!.username),
    username_template: cdktf.stringToTerraform(struct!.usernameTemplate),
    verify_connection: cdktf.booleanToTerraform(struct!.verifyConnection),
  }
}

export class DatabaseSecretsMountSnowflakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatabaseSecretsMountSnowflake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRoles = this._allowedRoles;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._maxConnectionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLifetime = this._maxConnectionLifetime;
    }
    if (this._maxIdleConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleConnections = this._maxIdleConnections;
    }
    if (this._maxOpenConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOpenConnections = this._maxOpenConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pluginName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginName = this._pluginName;
    }
    if (this._rootRotationStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootRotationStatements = this._rootRotationStatements;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameTemplate = this._usernameTemplate;
    }
    if (this._verifyConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyConnection = this._verifyConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseSecretsMountSnowflake | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRoles = undefined;
      this._connectionUrl = undefined;
      this._data = undefined;
      this._maxConnectionLifetime = undefined;
      this._maxIdleConnections = undefined;
      this._maxOpenConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._pluginName = undefined;
      this._rootRotationStatements = undefined;
      this._username = undefined;
      this._usernameTemplate = undefined;
      this._verifyConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRoles = value.allowedRoles;
      this._connectionUrl = value.connectionUrl;
      this._data = value.data;
      this._maxConnectionLifetime = value.maxConnectionLifetime;
      this._maxIdleConnections = value.maxIdleConnections;
      this._maxOpenConnections = value.maxOpenConnections;
      this._name = value.name;
      this._password = value.password;
      this._pluginName = value.pluginName;
      this._rootRotationStatements = value.rootRotationStatements;
      this._username = value.username;
      this._usernameTemplate = value.usernameTemplate;
      this._verifyConnection = value.verifyConnection;
    }
  }

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // connection_url - computed: false, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plugin_name - computed: true, optional: true, required: false
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  public resetPluginName() {
    this._pluginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // root_rotation_statements - computed: false, optional: true, required: false
  private _rootRotationStatements?: string[]; 
  public get rootRotationStatements() {
    return this.getListAttribute('root_rotation_statements');
  }
  public set rootRotationStatements(value: string[]) {
    this._rootRotationStatements = value;
  }
  public resetRootRotationStatements() {
    this._rootRotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootRotationStatementsInput() {
    return this._rootRotationStatements;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // verify_connection - computed: false, optional: true, required: false
  private _verifyConnection?: boolean | cdktf.IResolvable; 
  public get verifyConnection() {
    return this.getBooleanAttribute('verify_connection');
  }
  public set verifyConnection(value: boolean | cdktf.IResolvable) {
    this._verifyConnection = value;
  }
  public resetVerifyConnection() {
    this._verifyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyConnectionInput() {
    return this._verifyConnection;
  }
}

export class DatabaseSecretsMountSnowflakeList extends cdktf.ComplexList {
  public internalValue? : DatabaseSecretsMountSnowflake[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DatabaseSecretsMountSnowflakeOutputReference {
    return new DatabaseSecretsMountSnowflakeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount vault_database_secrets_mount}
*/
export class DatabaseSecretsMount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_database_secrets_mount";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/database_secrets_mount vault_database_secrets_mount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseSecretsMountConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseSecretsMountConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_database_secrets_mount',
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
    this._auditNonHmacRequestKeys = config.auditNonHmacRequestKeys;
    this._auditNonHmacResponseKeys = config.auditNonHmacResponseKeys;
    this._defaultLeaseTtlSeconds = config.defaultLeaseTtlSeconds;
    this._description = config.description;
    this._externalEntropyAccess = config.externalEntropyAccess;
    this._id = config.id;
    this._local = config.local;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._namespace = config.namespace;
    this._options = config.options;
    this._path = config.path;
    this._sealWrap = config.sealWrap;
    this._cassandra.internalValue = config.cassandra;
    this._couchbase.internalValue = config.couchbase;
    this._elasticsearch.internalValue = config.elasticsearch;
    this._hana.internalValue = config.hana;
    this._influxdb.internalValue = config.influxdb;
    this._mongodb.internalValue = config.mongodb;
    this._mongodbatlas.internalValue = config.mongodbatlas;
    this._mssql.internalValue = config.mssql;
    this._mysql.internalValue = config.mysql;
    this._mysqlAurora.internalValue = config.mysqlAurora;
    this._mysqlLegacy.internalValue = config.mysqlLegacy;
    this._mysqlRds.internalValue = config.mysqlRds;
    this._oracle.internalValue = config.oracle;
    this._postgresql.internalValue = config.postgresql;
    this._redshift.internalValue = config.redshift;
    this._snowflake.internalValue = config.snowflake;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // audit_non_hmac_request_keys - computed: true, optional: true, required: false
  private _auditNonHmacRequestKeys?: string[]; 
  public get auditNonHmacRequestKeys() {
    return this.getListAttribute('audit_non_hmac_request_keys');
  }
  public set auditNonHmacRequestKeys(value: string[]) {
    this._auditNonHmacRequestKeys = value;
  }
  public resetAuditNonHmacRequestKeys() {
    this._auditNonHmacRequestKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacRequestKeysInput() {
    return this._auditNonHmacRequestKeys;
  }

  // audit_non_hmac_response_keys - computed: true, optional: true, required: false
  private _auditNonHmacResponseKeys?: string[]; 
  public get auditNonHmacResponseKeys() {
    return this.getListAttribute('audit_non_hmac_response_keys');
  }
  public set auditNonHmacResponseKeys(value: string[]) {
    this._auditNonHmacResponseKeys = value;
  }
  public resetAuditNonHmacResponseKeys() {
    this._auditNonHmacResponseKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacResponseKeysInput() {
    return this._auditNonHmacResponseKeys;
  }

  // default_lease_ttl_seconds - computed: true, optional: true, required: false
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

  // engine_count - computed: true, optional: false, required: false
  public get engineCount() {
    return this.getNumberAttribute('engine_count');
  }

  // external_entropy_access - computed: false, optional: true, required: false
  private _externalEntropyAccess?: boolean | cdktf.IResolvable; 
  public get externalEntropyAccess() {
    return this.getBooleanAttribute('external_entropy_access');
  }
  public set externalEntropyAccess(value: boolean | cdktf.IResolvable) {
    this._externalEntropyAccess = value;
  }
  public resetExternalEntropyAccess() {
    this._externalEntropyAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEntropyAccessInput() {
    return this._externalEntropyAccess;
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

  // max_lease_ttl_seconds - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // seal_wrap - computed: true, optional: true, required: false
  private _sealWrap?: boolean | cdktf.IResolvable; 
  public get sealWrap() {
    return this.getBooleanAttribute('seal_wrap');
  }
  public set sealWrap(value: boolean | cdktf.IResolvable) {
    this._sealWrap = value;
  }
  public resetSealWrap() {
    this._sealWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sealWrapInput() {
    return this._sealWrap;
  }

  // cassandra - computed: false, optional: true, required: false
  private _cassandra = new DatabaseSecretsMountCassandraList(this, "cassandra", false);
  public get cassandra() {
    return this._cassandra;
  }
  public putCassandra(value: DatabaseSecretsMountCassandra[] | cdktf.IResolvable) {
    this._cassandra.internalValue = value;
  }
  public resetCassandra() {
    this._cassandra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraInput() {
    return this._cassandra.internalValue;
  }

  // couchbase - computed: false, optional: true, required: false
  private _couchbase = new DatabaseSecretsMountCouchbaseList(this, "couchbase", false);
  public get couchbase() {
    return this._couchbase;
  }
  public putCouchbase(value: DatabaseSecretsMountCouchbase[] | cdktf.IResolvable) {
    this._couchbase.internalValue = value;
  }
  public resetCouchbase() {
    this._couchbase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get couchbaseInput() {
    return this._couchbase.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new DatabaseSecretsMountElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: DatabaseSecretsMountElasticsearch[] | cdktf.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // hana - computed: false, optional: true, required: false
  private _hana = new DatabaseSecretsMountHanaList(this, "hana", false);
  public get hana() {
    return this._hana;
  }
  public putHana(value: DatabaseSecretsMountHana[] | cdktf.IResolvable) {
    this._hana.internalValue = value;
  }
  public resetHana() {
    this._hana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hanaInput() {
    return this._hana.internalValue;
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb = new DatabaseSecretsMountInfluxdbList(this, "influxdb", false);
  public get influxdb() {
    return this._influxdb;
  }
  public putInfluxdb(value: DatabaseSecretsMountInfluxdb[] | cdktf.IResolvable) {
    this._influxdb.internalValue = value;
  }
  public resetInfluxdb() {
    this._influxdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb.internalValue;
  }

  // mongodb - computed: false, optional: true, required: false
  private _mongodb = new DatabaseSecretsMountMongodbList(this, "mongodb", false);
  public get mongodb() {
    return this._mongodb;
  }
  public putMongodb(value: DatabaseSecretsMountMongodb[] | cdktf.IResolvable) {
    this._mongodb.internalValue = value;
  }
  public resetMongodb() {
    this._mongodb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbInput() {
    return this._mongodb.internalValue;
  }

  // mongodbatlas - computed: false, optional: true, required: false
  private _mongodbatlas = new DatabaseSecretsMountMongodbatlasList(this, "mongodbatlas", false);
  public get mongodbatlas() {
    return this._mongodbatlas;
  }
  public putMongodbatlas(value: DatabaseSecretsMountMongodbatlas[] | cdktf.IResolvable) {
    this._mongodbatlas.internalValue = value;
  }
  public resetMongodbatlas() {
    this._mongodbatlas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbatlasInput() {
    return this._mongodbatlas.internalValue;
  }

  // mssql - computed: false, optional: true, required: false
  private _mssql = new DatabaseSecretsMountMssqlList(this, "mssql", false);
  public get mssql() {
    return this._mssql;
  }
  public putMssql(value: DatabaseSecretsMountMssql[] | cdktf.IResolvable) {
    this._mssql.internalValue = value;
  }
  public resetMssql() {
    this._mssql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlInput() {
    return this._mssql.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DatabaseSecretsMountMysqlList(this, "mysql", false);
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DatabaseSecretsMountMysql[] | cdktf.IResolvable) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // mysql_aurora - computed: false, optional: true, required: false
  private _mysqlAurora = new DatabaseSecretsMountMysqlAuroraList(this, "mysql_aurora", false);
  public get mysqlAurora() {
    return this._mysqlAurora;
  }
  public putMysqlAurora(value: DatabaseSecretsMountMysqlAurora[] | cdktf.IResolvable) {
    this._mysqlAurora.internalValue = value;
  }
  public resetMysqlAurora() {
    this._mysqlAurora.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlAuroraInput() {
    return this._mysqlAurora.internalValue;
  }

  // mysql_legacy - computed: false, optional: true, required: false
  private _mysqlLegacy = new DatabaseSecretsMountMysqlLegacyList(this, "mysql_legacy", false);
  public get mysqlLegacy() {
    return this._mysqlLegacy;
  }
  public putMysqlLegacy(value: DatabaseSecretsMountMysqlLegacy[] | cdktf.IResolvable) {
    this._mysqlLegacy.internalValue = value;
  }
  public resetMysqlLegacy() {
    this._mysqlLegacy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlLegacyInput() {
    return this._mysqlLegacy.internalValue;
  }

  // mysql_rds - computed: false, optional: true, required: false
  private _mysqlRds = new DatabaseSecretsMountMysqlRdsList(this, "mysql_rds", false);
  public get mysqlRds() {
    return this._mysqlRds;
  }
  public putMysqlRds(value: DatabaseSecretsMountMysqlRds[] | cdktf.IResolvable) {
    this._mysqlRds.internalValue = value;
  }
  public resetMysqlRds() {
    this._mysqlRds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlRdsInput() {
    return this._mysqlRds.internalValue;
  }

  // oracle - computed: false, optional: true, required: false
  private _oracle = new DatabaseSecretsMountOracleList(this, "oracle", false);
  public get oracle() {
    return this._oracle;
  }
  public putOracle(value: DatabaseSecretsMountOracle[] | cdktf.IResolvable) {
    this._oracle.internalValue = value;
  }
  public resetOracle() {
    this._oracle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInput() {
    return this._oracle.internalValue;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new DatabaseSecretsMountPostgresqlList(this, "postgresql", false);
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: DatabaseSecretsMountPostgresql[] | cdktf.IResolvable) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new DatabaseSecretsMountRedshiftList(this, "redshift", false);
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: DatabaseSecretsMountRedshift[] | cdktf.IResolvable) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new DatabaseSecretsMountSnowflakeList(this, "snowflake", false);
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: DatabaseSecretsMountSnowflake[] | cdktf.IResolvable) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_non_hmac_request_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditNonHmacRequestKeys),
      audit_non_hmac_response_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditNonHmacResponseKeys),
      default_lease_ttl_seconds: cdktf.numberToTerraform(this._defaultLeaseTtlSeconds),
      description: cdktf.stringToTerraform(this._description),
      external_entropy_access: cdktf.booleanToTerraform(this._externalEntropyAccess),
      id: cdktf.stringToTerraform(this._id),
      local: cdktf.booleanToTerraform(this._local),
      max_lease_ttl_seconds: cdktf.numberToTerraform(this._maxLeaseTtlSeconds),
      namespace: cdktf.stringToTerraform(this._namespace),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      path: cdktf.stringToTerraform(this._path),
      seal_wrap: cdktf.booleanToTerraform(this._sealWrap),
      cassandra: cdktf.listMapper(databaseSecretsMountCassandraToTerraform, true)(this._cassandra.internalValue),
      couchbase: cdktf.listMapper(databaseSecretsMountCouchbaseToTerraform, true)(this._couchbase.internalValue),
      elasticsearch: cdktf.listMapper(databaseSecretsMountElasticsearchToTerraform, true)(this._elasticsearch.internalValue),
      hana: cdktf.listMapper(databaseSecretsMountHanaToTerraform, true)(this._hana.internalValue),
      influxdb: cdktf.listMapper(databaseSecretsMountInfluxdbToTerraform, true)(this._influxdb.internalValue),
      mongodb: cdktf.listMapper(databaseSecretsMountMongodbToTerraform, true)(this._mongodb.internalValue),
      mongodbatlas: cdktf.listMapper(databaseSecretsMountMongodbatlasToTerraform, true)(this._mongodbatlas.internalValue),
      mssql: cdktf.listMapper(databaseSecretsMountMssqlToTerraform, true)(this._mssql.internalValue),
      mysql: cdktf.listMapper(databaseSecretsMountMysqlToTerraform, true)(this._mysql.internalValue),
      mysql_aurora: cdktf.listMapper(databaseSecretsMountMysqlAuroraToTerraform, true)(this._mysqlAurora.internalValue),
      mysql_legacy: cdktf.listMapper(databaseSecretsMountMysqlLegacyToTerraform, true)(this._mysqlLegacy.internalValue),
      mysql_rds: cdktf.listMapper(databaseSecretsMountMysqlRdsToTerraform, true)(this._mysqlRds.internalValue),
      oracle: cdktf.listMapper(databaseSecretsMountOracleToTerraform, true)(this._oracle.internalValue),
      postgresql: cdktf.listMapper(databaseSecretsMountPostgresqlToTerraform, true)(this._postgresql.internalValue),
      redshift: cdktf.listMapper(databaseSecretsMountRedshiftToTerraform, true)(this._redshift.internalValue),
      snowflake: cdktf.listMapper(databaseSecretsMountSnowflakeToTerraform, true)(this._snowflake.internalValue),
    };
  }
}
