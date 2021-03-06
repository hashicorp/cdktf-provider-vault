// https://www.terraform.io/docs/providers/vault/r/transform_alphabet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransformAlphabetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string of characters that contains the alphabet set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_alphabet#alphabet TransformAlphabet#alphabet}
  */
  readonly alphabet?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_alphabet#id TransformAlphabet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the alphabet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_alphabet#name TransformAlphabet#name}
  */
  readonly name: string;
  /**
  * The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_alphabet#path TransformAlphabet#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/transform_alphabet vault_transform_alphabet}
*/
export class TransformAlphabet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_alphabet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/transform_alphabet vault_transform_alphabet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformAlphabetConfig
  */
  public constructor(scope: Construct, id: string, config: TransformAlphabetConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_alphabet',
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
    this._alphabet = config.alphabet;
    this._id = config.id;
    this._name = config.name;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alphabet - computed: false, optional: true, required: false
  private _alphabet?: string; 
  public get alphabet() {
    return this.getStringAttribute('alphabet');
  }
  public set alphabet(value: string) {
    this._alphabet = value;
  }
  public resetAlphabet() {
    this._alphabet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alphabetInput() {
    return this._alphabet;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alphabet: cdktf.stringToTerraform(this._alphabet),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
    };
  }
}
