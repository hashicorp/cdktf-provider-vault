// https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JwtAuthBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of allowed values for redirect_uri during OIDC logins.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#allowed_redirect_uris JwtAuthBackendRole#allowed_redirect_uris}
  */
  readonly allowedRedirectUris?: string[];
  /**
  * Unique name of the auth backend to configure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#backend JwtAuthBackendRole#backend}
  */
  readonly backend?: string;
  /**
  * List of aud claims to match against. Any match is sufficient.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#bound_audiences JwtAuthBackendRole#bound_audiences}
  */
  readonly boundAudiences?: string[];
  /**
  * Map of claims/values to match against. The expected value may be a single string or a comma-separated string list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#bound_claims JwtAuthBackendRole#bound_claims}
  */
  readonly boundClaims?: { [key: string]: string };
  /**
  * How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#bound_claims_type JwtAuthBackendRole#bound_claims_type}
  */
  readonly boundClaimsType?: string;
  /**
  * If set, requires that the sub claim matches this value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#bound_subject JwtAuthBackendRole#bound_subject}
  */
  readonly boundSubject?: string;
  /**
  * Map of claims (keys) to be copied to specified metadata fields (values).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#claim_mappings JwtAuthBackendRole#claim_mappings}
  */
  readonly claimMappings?: { [key: string]: string };
  /**
  * The amount of leeway to add to all claims to account for clock skew, in seconds. Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#clock_skew_leeway JwtAuthBackendRole#clock_skew_leeway}
  */
  readonly clockSkewLeeway?: number;
  /**
  * Disable bound claim value parsing. Useful when values contain commas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#disable_bound_claims_parsing JwtAuthBackendRole#disable_bound_claims_parsing}
  */
  readonly disableBoundClaimsParsing?: boolean | cdktf.IResolvable;
  /**
  * The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds. Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#expiration_leeway JwtAuthBackendRole#expiration_leeway}
  */
  readonly expirationLeeway?: number;
  /**
  * The claim to use to uniquely identify the set of groups to which the user belongs; this will be used as the names for the Identity group aliases created due to a successful login. The claim value must be a list of strings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#groups_claim JwtAuthBackendRole#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#id JwtAuthBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#namespace JwtAuthBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds. Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#not_before_leeway JwtAuthBackendRole#not_before_leeway}
  */
  readonly notBeforeLeeway?: number;
  /**
  * List of OIDC scopes to be used with an OIDC role. The standard scope "openid" is automatically included and need not be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#oidc_scopes JwtAuthBackendRole#oidc_scopes}
  */
  readonly oidcScopes?: string[];
  /**
  * Name of the role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#role_name JwtAuthBackendRole#role_name}
  */
  readonly roleName: string;
  /**
  * Type of role, either "oidc" (default) or "jwt"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#role_type JwtAuthBackendRole#role_type}
  */
  readonly roleType?: string;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_bound_cidrs JwtAuthBackendRole#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_explicit_max_ttl JwtAuthBackendRole#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_max_ttl JwtAuthBackendRole#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_no_default_policy JwtAuthBackendRole#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_num_uses JwtAuthBackendRole#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_period JwtAuthBackendRole#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_policies JwtAuthBackendRole#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_ttl JwtAuthBackendRole#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_type JwtAuthBackendRole#token_type}
  */
  readonly tokenType?: string;
  /**
  * The claim to use to uniquely identify the user; this will be used as the name for the Identity entity alias created due to a successful login.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#user_claim JwtAuthBackendRole#user_claim}
  */
  readonly userClaim: string;
  /**
  * Log received OIDC tokens and claims when debug-level logging is active. Not recommended in production since sensitive information may be present in OIDC responses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#verbose_oidc_logging JwtAuthBackendRole#verbose_oidc_logging}
  */
  readonly verboseOidcLogging?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role vault_jwt_auth_backend_role}
*/
export class JwtAuthBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_jwt_auth_backend_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role vault_jwt_auth_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JwtAuthBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: JwtAuthBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_jwt_auth_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.7.0',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedRedirectUris = config.allowedRedirectUris;
    this._backend = config.backend;
    this._boundAudiences = config.boundAudiences;
    this._boundClaims = config.boundClaims;
    this._boundClaimsType = config.boundClaimsType;
    this._boundSubject = config.boundSubject;
    this._claimMappings = config.claimMappings;
    this._clockSkewLeeway = config.clockSkewLeeway;
    this._disableBoundClaimsParsing = config.disableBoundClaimsParsing;
    this._expirationLeeway = config.expirationLeeway;
    this._groupsClaim = config.groupsClaim;
    this._id = config.id;
    this._namespace = config.namespace;
    this._notBeforeLeeway = config.notBeforeLeeway;
    this._oidcScopes = config.oidcScopes;
    this._roleName = config.roleName;
    this._roleType = config.roleType;
    this._tokenBoundCidrs = config.tokenBoundCidrs;
    this._tokenExplicitMaxTtl = config.tokenExplicitMaxTtl;
    this._tokenMaxTtl = config.tokenMaxTtl;
    this._tokenNoDefaultPolicy = config.tokenNoDefaultPolicy;
    this._tokenNumUses = config.tokenNumUses;
    this._tokenPeriod = config.tokenPeriod;
    this._tokenPolicies = config.tokenPolicies;
    this._tokenTtl = config.tokenTtl;
    this._tokenType = config.tokenType;
    this._userClaim = config.userClaim;
    this._verboseOidcLogging = config.verboseOidcLogging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_redirect_uris - computed: false, optional: true, required: false
  private _allowedRedirectUris?: string[]; 
  public get allowedRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_redirect_uris'));
  }
  public set allowedRedirectUris(value: string[]) {
    this._allowedRedirectUris = value;
  }
  public resetAllowedRedirectUris() {
    this._allowedRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRedirectUrisInput() {
    return this._allowedRedirectUris;
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // bound_audiences - computed: false, optional: true, required: false
  private _boundAudiences?: string[]; 
  public get boundAudiences() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_audiences'));
  }
  public set boundAudiences(value: string[]) {
    this._boundAudiences = value;
  }
  public resetBoundAudiences() {
    this._boundAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundAudiencesInput() {
    return this._boundAudiences;
  }

  // bound_claims - computed: false, optional: true, required: false
  private _boundClaims?: { [key: string]: string }; 
  public get boundClaims() {
    return this.getStringMapAttribute('bound_claims');
  }
  public set boundClaims(value: { [key: string]: string }) {
    this._boundClaims = value;
  }
  public resetBoundClaims() {
    this._boundClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundClaimsInput() {
    return this._boundClaims;
  }

  // bound_claims_type - computed: true, optional: true, required: false
  private _boundClaimsType?: string; 
  public get boundClaimsType() {
    return this.getStringAttribute('bound_claims_type');
  }
  public set boundClaimsType(value: string) {
    this._boundClaimsType = value;
  }
  public resetBoundClaimsType() {
    this._boundClaimsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundClaimsTypeInput() {
    return this._boundClaimsType;
  }

  // bound_subject - computed: false, optional: true, required: false
  private _boundSubject?: string; 
  public get boundSubject() {
    return this.getStringAttribute('bound_subject');
  }
  public set boundSubject(value: string) {
    this._boundSubject = value;
  }
  public resetBoundSubject() {
    this._boundSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundSubjectInput() {
    return this._boundSubject;
  }

  // claim_mappings - computed: false, optional: true, required: false
  private _claimMappings?: { [key: string]: string }; 
  public get claimMappings() {
    return this.getStringMapAttribute('claim_mappings');
  }
  public set claimMappings(value: { [key: string]: string }) {
    this._claimMappings = value;
  }
  public resetClaimMappings() {
    this._claimMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMappingsInput() {
    return this._claimMappings;
  }

  // clock_skew_leeway - computed: false, optional: true, required: false
  private _clockSkewLeeway?: number; 
  public get clockSkewLeeway() {
    return this.getNumberAttribute('clock_skew_leeway');
  }
  public set clockSkewLeeway(value: number) {
    this._clockSkewLeeway = value;
  }
  public resetClockSkewLeeway() {
    this._clockSkewLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewLeewayInput() {
    return this._clockSkewLeeway;
  }

  // disable_bound_claims_parsing - computed: false, optional: true, required: false
  private _disableBoundClaimsParsing?: boolean | cdktf.IResolvable; 
  public get disableBoundClaimsParsing() {
    return this.getBooleanAttribute('disable_bound_claims_parsing');
  }
  public set disableBoundClaimsParsing(value: boolean | cdktf.IResolvable) {
    this._disableBoundClaimsParsing = value;
  }
  public resetDisableBoundClaimsParsing() {
    this._disableBoundClaimsParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBoundClaimsParsingInput() {
    return this._disableBoundClaimsParsing;
  }

  // expiration_leeway - computed: false, optional: true, required: false
  private _expirationLeeway?: number; 
  public get expirationLeeway() {
    return this.getNumberAttribute('expiration_leeway');
  }
  public set expirationLeeway(value: number) {
    this._expirationLeeway = value;
  }
  public resetExpirationLeeway() {
    this._expirationLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationLeewayInput() {
    return this._expirationLeeway;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim?: string; 
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }
  public set groupsClaim(value: string) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
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

  // not_before_leeway - computed: false, optional: true, required: false
  private _notBeforeLeeway?: number; 
  public get notBeforeLeeway() {
    return this.getNumberAttribute('not_before_leeway');
  }
  public set notBeforeLeeway(value: number) {
    this._notBeforeLeeway = value;
  }
  public resetNotBeforeLeeway() {
    this._notBeforeLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeLeewayInput() {
    return this._notBeforeLeeway;
  }

  // oidc_scopes - computed: false, optional: true, required: false
  private _oidcScopes?: string[]; 
  public get oidcScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oidc_scopes'));
  }
  public set oidcScopes(value: string[]) {
    this._oidcScopes = value;
  }
  public resetOidcScopes() {
    this._oidcScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcScopesInput() {
    return this._oidcScopes;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_type - computed: true, optional: true, required: false
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  public resetRoleType() {
    this._roleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // token_bound_cidrs - computed: false, optional: true, required: false
  private _tokenBoundCidrs?: string[]; 
  public get tokenBoundCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('token_bound_cidrs'));
  }
  public set tokenBoundCidrs(value: string[]) {
    this._tokenBoundCidrs = value;
  }
  public resetTokenBoundCidrs() {
    this._tokenBoundCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBoundCidrsInput() {
    return this._tokenBoundCidrs;
  }

  // token_explicit_max_ttl - computed: false, optional: true, required: false
  private _tokenExplicitMaxTtl?: number; 
  public get tokenExplicitMaxTtl() {
    return this.getNumberAttribute('token_explicit_max_ttl');
  }
  public set tokenExplicitMaxTtl(value: number) {
    this._tokenExplicitMaxTtl = value;
  }
  public resetTokenExplicitMaxTtl() {
    this._tokenExplicitMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExplicitMaxTtlInput() {
    return this._tokenExplicitMaxTtl;
  }

  // token_max_ttl - computed: false, optional: true, required: false
  private _tokenMaxTtl?: number; 
  public get tokenMaxTtl() {
    return this.getNumberAttribute('token_max_ttl');
  }
  public set tokenMaxTtl(value: number) {
    this._tokenMaxTtl = value;
  }
  public resetTokenMaxTtl() {
    this._tokenMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenMaxTtlInput() {
    return this._tokenMaxTtl;
  }

  // token_no_default_policy - computed: false, optional: true, required: false
  private _tokenNoDefaultPolicy?: boolean | cdktf.IResolvable; 
  public get tokenNoDefaultPolicy() {
    return this.getBooleanAttribute('token_no_default_policy');
  }
  public set tokenNoDefaultPolicy(value: boolean | cdktf.IResolvable) {
    this._tokenNoDefaultPolicy = value;
  }
  public resetTokenNoDefaultPolicy() {
    this._tokenNoDefaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNoDefaultPolicyInput() {
    return this._tokenNoDefaultPolicy;
  }

  // token_num_uses - computed: false, optional: true, required: false
  private _tokenNumUses?: number; 
  public get tokenNumUses() {
    return this.getNumberAttribute('token_num_uses');
  }
  public set tokenNumUses(value: number) {
    this._tokenNumUses = value;
  }
  public resetTokenNumUses() {
    this._tokenNumUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNumUsesInput() {
    return this._tokenNumUses;
  }

  // token_period - computed: false, optional: true, required: false
  private _tokenPeriod?: number; 
  public get tokenPeriod() {
    return this.getNumberAttribute('token_period');
  }
  public set tokenPeriod(value: number) {
    this._tokenPeriod = value;
  }
  public resetTokenPeriod() {
    this._tokenPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPeriodInput() {
    return this._tokenPeriod;
  }

  // token_policies - computed: false, optional: true, required: false
  private _tokenPolicies?: string[]; 
  public get tokenPolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('token_policies'));
  }
  public set tokenPolicies(value: string[]) {
    this._tokenPolicies = value;
  }
  public resetTokenPolicies() {
    this._tokenPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPoliciesInput() {
    return this._tokenPolicies;
  }

  // token_ttl - computed: false, optional: true, required: false
  private _tokenTtl?: number; 
  public get tokenTtl() {
    return this.getNumberAttribute('token_ttl');
  }
  public set tokenTtl(value: number) {
    this._tokenTtl = value;
  }
  public resetTokenTtl() {
    this._tokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTtlInput() {
    return this._tokenTtl;
  }

  // token_type - computed: false, optional: true, required: false
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  public resetTokenType() {
    this._tokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }

  // user_claim - computed: false, optional: false, required: true
  private _userClaim?: string; 
  public get userClaim() {
    return this.getStringAttribute('user_claim');
  }
  public set userClaim(value: string) {
    this._userClaim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userClaimInput() {
    return this._userClaim;
  }

  // verbose_oidc_logging - computed: false, optional: true, required: false
  private _verboseOidcLogging?: boolean | cdktf.IResolvable; 
  public get verboseOidcLogging() {
    return this.getBooleanAttribute('verbose_oidc_logging');
  }
  public set verboseOidcLogging(value: boolean | cdktf.IResolvable) {
    this._verboseOidcLogging = value;
  }
  public resetVerboseOidcLogging() {
    this._verboseOidcLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseOidcLoggingInput() {
    return this._verboseOidcLogging;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedRedirectUris),
      backend: cdktf.stringToTerraform(this._backend),
      bound_audiences: cdktf.listMapper(cdktf.stringToTerraform)(this._boundAudiences),
      bound_claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._boundClaims),
      bound_claims_type: cdktf.stringToTerraform(this._boundClaimsType),
      bound_subject: cdktf.stringToTerraform(this._boundSubject),
      claim_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(this._claimMappings),
      clock_skew_leeway: cdktf.numberToTerraform(this._clockSkewLeeway),
      disable_bound_claims_parsing: cdktf.booleanToTerraform(this._disableBoundClaimsParsing),
      expiration_leeway: cdktf.numberToTerraform(this._expirationLeeway),
      groups_claim: cdktf.stringToTerraform(this._groupsClaim),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      not_before_leeway: cdktf.numberToTerraform(this._notBeforeLeeway),
      oidc_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._oidcScopes),
      role_name: cdktf.stringToTerraform(this._roleName),
      role_type: cdktf.stringToTerraform(this._roleType),
      token_bound_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(this._tokenBoundCidrs),
      token_explicit_max_ttl: cdktf.numberToTerraform(this._tokenExplicitMaxTtl),
      token_max_ttl: cdktf.numberToTerraform(this._tokenMaxTtl),
      token_no_default_policy: cdktf.booleanToTerraform(this._tokenNoDefaultPolicy),
      token_num_uses: cdktf.numberToTerraform(this._tokenNumUses),
      token_period: cdktf.numberToTerraform(this._tokenPeriod),
      token_policies: cdktf.listMapper(cdktf.stringToTerraform)(this._tokenPolicies),
      token_ttl: cdktf.numberToTerraform(this._tokenTtl),
      token_type: cdktf.stringToTerraform(this._tokenType),
      user_claim: cdktf.stringToTerraform(this._userClaim),
      verbose_oidc_logging: cdktf.booleanToTerraform(this._verboseOidcLogging),
    };
  }
}
