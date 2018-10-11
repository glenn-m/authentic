crystal_doc_search_index_callback({"repository_name":"github.com/luckyframework/authentic","body":"# Authentic\n\nA Crystal library for handling common authentication actions in Lucky projects.\n\n## Installation\n\nAuthentic will be bundled in Lucky projects automatically in the next version.\n\n## Development\n\n* `crystal deps`\n* `crystal taks.cr -- db.create`\n* `crystal taks.cr -- db.migrate`\n* `crystal spec`\n\n## Contributing\n\n1.  Fork it ( https://github.com/luckyframework/authentic/fork )\n2.  Create your feature branch (git checkout -b my-new-feature)\n3.  Make your changes\n4.  Run `./bin/test` to run the specs, build shards, and check formatting\n5.  Commit your changes (git commit -am 'Add some feature')\n6.  Push to the branch (git push origin my-new-feature)\n7.  Create a new Pull Request\n\n## Contributors\n\n* [paulcsmith](https://github.com/paulcsmith) Paul Smith - creator, maintainer\n","program":{"html_id":"github.com/luckyframework/authentic/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/luckyframework/authentic","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/luckyframework/authentic/Authentic","path":"Authentic.html","kind":"module","full_name":"Authentic","name":"Authentic","abstract":false,"superclass":null,"ancestors":[{"html_id":"github.com/luckyframework/authentic/Habitat/SettingsHelpers","kind":"module","full_name":"Habitat::SettingsHelpers","name":"SettingsHelpers"},{"html_id":"github.com/luckyframework/authentic/Habitat/TempConfig","kind":"module","full_name":"Habitat::TempConfig","name":"TempConfig"}],"locations":[{"filename":"authentic/action_helpers.cr","line_number":2,"url":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr"},{"filename":"authentic/version.cr","line_number":1,"url":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/version.cr"},{"filename":"authentic.cr","line_number":33,"url":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr"}],"repository_name":"github.com/luckyframework/authentic","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"HABITAT_SETTINGS","name":"HABITAT_SETTINGS","value":"[encryption_cost : Int32 = Crypto::Bcrypt::DEFAULT_COST, default_password_reset_time_limit : Time::Span = 15.minutes, secret_key : String] of Crystal::Macros::TypeDeclaration","doc":null,"summary":null},{"id":"VERSION","name":"VERSION","value":"\"0.1.0\"","doc":null,"summary":null}],"included_modules":[{"html_id":"github.com/luckyframework/authentic/Habitat/SettingsHelpers","kind":"module","full_name":"Habitat::SettingsHelpers","name":"SettingsHelpers"},{"html_id":"github.com/luckyframework/authentic/Habitat/TempConfig","kind":"module","full_name":"Habitat::TempConfig","name":"TempConfig"}],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"Module for handling authentication\n\n## Configuration\n\nAuthentic uses [Habitat](https://github.com/luckyframework/habitat) for\nconfiguration.\n\nHere's how to set it up:\n\n```crystal\n# Most of this is set up for you when you generate a new Lucky project.\n# This is usually in config/authentic.cr\nAuthentic.configure do |settings|\n  # Required: You must set a secret key for encrypting password reset tokens\n  # Hint: generate a key with: Random::Secure.base64(32)\n  settings.secret_key = \"32 character long secret\"\n\n  # Optional: `encryption_cost` defaults to `Crypto::Bcrypt::DEFAULT_COST`\n  # For faster tests set to 4 (the lowest allowed cost).\n  # Make sure to use `Crypto::Bcrypt::DEFAULT_COST` in production\n  settings.encryption_cost = 1\n\n  # Optional: `default_password_reset_time_limit` defaults to 15.minutes\n  settings.default_password_reset_time_limit = 1.day\nend\n```","summary":"<p>Module for handling authentication</p>","class_methods":[{"id":"configure(&block)-class-method","html_id":"configure(&amp;block)-class-method","name":"configure","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"(&block)","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L34","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L34","def":{"name":"configure","args":[],"double_splat":null,"splat_index":null,"yields":1,"block_arg":null,"return_type":"","visibility":"Public","body":"yield settings"}},{"id":"copy_and_encrypt(frompassword_field:LuckyRecord::Field|LuckyRecord::FillableField,toencrypted_password_field:LuckyRecord::Field|LuckyRecord::FillableField):Void-class-method","html_id":"copy_and_encrypt(frompassword_field:LuckyRecord::Field|LuckyRecord::FillableField,toencrypted_password_field:LuckyRecord::Field|LuckyRecord::FillableField):Void-class-method","name":"copy_and_encrypt","doc":"Encrypts a form password\n\n```crystal\nclass SignUpForm < User::FormHelpers\n  virtual password : String\n\n  def prepare\n    # Encrypt the `password` and copy the value to the `encrypted_password` field\n    Authentic.copy_and_encrypt password, to: encrypted_password\n  end\nend\n```","summary":"<p>Encrypts a form password</p>","abstract":false,"args":[{"name":"password_field","doc":null,"default_value":"","external_name":"from","restriction":"LuckyRecord::Field | LuckyRecord::FillableField"},{"name":"encrypted_password_field","doc":null,"default_value":"","external_name":"to","restriction":"LuckyRecord::Field | LuckyRecord::FillableField"}],"args_string":"(from password_field : LuckyRecord::Field | LuckyRecord::FillableField, to encrypted_password_field : LuckyRecord::Field | LuckyRecord::FillableField) : Void","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L93","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L93","def":{"name":"copy_and_encrypt","args":[{"name":"password_field","doc":null,"default_value":"","external_name":"from","restriction":"LuckyRecord::Field | LuckyRecord::FillableField"},{"name":"encrypted_password_field","doc":null,"default_value":"","external_name":"to","restriction":"LuckyRecord::Field | LuckyRecord::FillableField"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Void","visibility":"Public","body":"password_field.value.try do |value|\n  encrypted_password_field.value = generate_encrypted_password(value)\nend"}},{"id":"correct_password?(authenticatable:Authentic::PasswordAuthenticatable,password_value:String):Bool-class-method","html_id":"correct_password?(authenticatable:Authentic::PasswordAuthenticatable,password_value:String):Bool-class-method","name":"correct_password?","doc":"Checks whether the password is correct\n\n```crystal\nuser = UserQuery.first\nAuthentic.correct_password?(user, \"my-password\")\n```","summary":"<p>Checks whether the password is correct</p>","abstract":false,"args":[{"name":"authenticatable","doc":null,"default_value":"","external_name":"authenticatable","restriction":"Authentic::PasswordAuthenticatable"},{"name":"password_value","doc":null,"default_value":"","external_name":"password_value","restriction":"String"}],"args_string":"(authenticatable : Authentic::PasswordAuthenticatable, password_value : String) : Bool","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L74","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L74","def":{"name":"correct_password?","args":[{"name":"authenticatable","doc":null,"default_value":"","external_name":"authenticatable","restriction":"Authentic::PasswordAuthenticatable"},{"name":"password_value","doc":null,"default_value":"","external_name":"password_value","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Bool","visibility":"Public","body":"(Crypto::Bcrypt::Password.new(authenticatable.encrypted_password)) == password_value"}},{"id":"generate_encrypted_password(password_value:String,encryptor=Crypto::Bcrypt::Password):String-class-method","html_id":"generate_encrypted_password(password_value:String,encryptor=Crypto::Bcrypt::Password):String-class-method","name":"generate_encrypted_password","doc":"Generates a encrypted password from a password string\n\nBy default it uses Bcrypt to encrypt the password.","summary":"<p>Generates a encrypted password from a password string</p>","abstract":false,"args":[{"name":"password_value","doc":null,"default_value":"","external_name":"password_value","restriction":"String"},{"name":"encryptor","doc":null,"default_value":"Crypto::Bcrypt::Password","external_name":"encryptor","restriction":""}],"args_string":"(password_value : String, encryptor = <span class=\"t\">Crypto</span><span class=\"t\">::</span><span class=\"t\">Bcrypt</span><span class=\"t\">::</span><span class=\"t\">Password</span>) : String","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L105","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L105","def":{"name":"generate_encrypted_password","args":[{"name":"password_value","doc":null,"default_value":"","external_name":"password_value","restriction":"String"},{"name":"encryptor","doc":null,"default_value":"Crypto::Bcrypt::Password","external_name":"encryptor","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"(encryptor.create(password_value, cost: settings.encryption_cost)).to_s"}},{"id":"generate_password_reset_token(authenticatable:Authentic::PasswordAuthenticatable,expires_in:Time::Span=Authentic.settings.default_password_reset_time_limit):String-class-method","html_id":"generate_password_reset_token(authenticatable:Authentic::PasswordAuthenticatable,expires_in:Time::Span=Authentic.settings.default_password_reset_time_limit):String-class-method","name":"generate_password_reset_token","doc":"Generates a password reset token","summary":"<p>Generates a password reset token</p>","abstract":false,"args":[{"name":"authenticatable","doc":null,"default_value":"","external_name":"authenticatable","restriction":"Authentic::PasswordAuthenticatable"},{"name":"expires_in","doc":null,"default_value":"Authentic.settings.default_password_reset_time_limit","external_name":"expires_in","restriction":"Time::Span"}],"args_string":"(authenticatable : Authentic::PasswordAuthenticatable, expires_in : Time::Span = <span class=\"t\">Authentic</span>.settings.default_password_reset_time_limit) : String","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L116","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L116","def":{"name":"generate_password_reset_token","args":[{"name":"authenticatable","doc":null,"default_value":"","external_name":"authenticatable","restriction":"Authentic::PasswordAuthenticatable"},{"name":"expires_in","doc":null,"default_value":"Authentic.settings.default_password_reset_time_limit","external_name":"expires_in","restriction":"Time::Span"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":"encryptor = Lucky::MessageEncryptor.new(secret: settings.secret_key)\nencryptor.encrypt_and_sign(\"#{authenticatable.id}:#{expires_in.from_now.epoch_ms}\")\n"}},{"id":"redirect_to_originally_requested_path(action:Lucky::Action,fallback:Lucky::Action.class|Lucky::RouteHelper):Lucky::Response-class-method","html_id":"redirect_to_originally_requested_path(action:Lucky::Action,fallback:Lucky::Action.class|Lucky::RouteHelper):Lucky::Response-class-method","name":"redirect_to_originally_requested_path","doc":"After successful sign in, call this to redirect back to the originally request path\n\nFirst call `Authentic.remember_requested_path` if the user is not signed in.\nThen call this to redirect them. A `fallback` action is required. The\n`fallback` action will be used if user was not trying to access a protected\npage before sign in.","summary":"<p>After successful sign in, call this to redirect back to the originally request path</p>","abstract":false,"args":[{"name":"action","doc":null,"default_value":"","external_name":"action","restriction":"Lucky::Action"},{"name":"fallback","doc":null,"default_value":"","external_name":"fallback","restriction":"Lucky::Action.class | Lucky::RouteHelper"}],"args_string":"(action : Lucky::Action, fallback : Lucky::Action.class | Lucky::RouteHelper) : Lucky::Response","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L59","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L59","def":{"name":"redirect_to_originally_requested_path","args":[{"name":"action","doc":null,"default_value":"","external_name":"action","restriction":"Lucky::Action"},{"name":"fallback","doc":null,"default_value":"","external_name":"fallback","restriction":"Lucky::Action.class | Lucky::RouteHelper"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Lucky::Response","visibility":"Public","body":"return_to = action.session.get?(:return_to)\naction.session.unset(:return_to)\naction.redirect(to: return_to || fallback)\n"}},{"id":"remember_requested_path(action:Lucky::Action):Void-class-method","html_id":"remember_requested_path(action:Lucky::Action):Void-class-method","name":"remember_requested_path","doc":"Remember the originally requested path if it is a GET\n\nCall this if the user requested an action that requires sign in.\nIt will remember the path they requested if it is a get.\n\nOnce the user signs in call `Authentic.redirect_to_originally_requested_path`\nto redirect them back.","summary":"<p>Remember the originally requested path if it is a GET</p>","abstract":false,"args":[{"name":"action","doc":null,"default_value":"","external_name":"action","restriction":"Lucky::Action"}],"args_string":"(action : Lucky::Action) : Void","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L47","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L47","def":{"name":"remember_requested_path","args":[{"name":"action","doc":null,"default_value":"","external_name":"action","restriction":"Lucky::Action"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Void","visibility":"Public","body":"if action.request.method.upcase == \"GET\"\n  action.session.set(:return_to, action.request.resource)\nend"}},{"id":"settings-class-method","html_id":"settings-class-method","name":"settings","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L34","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L34","def":{"name":"settings","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"Settings"}},{"id":"valid_password_reset_token?(authenticatable:Authentic::PasswordAuthenticatable,token:String):Bool-class-method","html_id":"valid_password_reset_token?(authenticatable:Authentic::PasswordAuthenticatable,token:String):Bool-class-method","name":"valid_password_reset_token?","doc":"Checks that the given reset token is valid\n\nA token is valid if the id matches the authenticatable and the token is not\nexpired.\n\nTo generate a token see `Authentic.generate_password_reset_token`","summary":"<p>Checks that the given reset token is valid</p>","abstract":false,"args":[{"name":"authenticatable","doc":null,"default_value":"","external_name":"authenticatable","restriction":"Authentic::PasswordAuthenticatable"},{"name":"token","doc":null,"default_value":"","external_name":"token","restriction":"String"}],"args_string":"(authenticatable : Authentic::PasswordAuthenticatable, token : String) : Bool","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L130","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L130","def":{"name":"valid_password_reset_token?","args":[{"name":"authenticatable","doc":null,"default_value":"","external_name":"authenticatable","restriction":"Authentic::PasswordAuthenticatable"},{"name":"token","doc":null,"default_value":"","external_name":"token","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Bool","visibility":"Public","body":"encryptor = Lucky::MessageEncryptor.new(secret: settings.secret_key)\nuser_id, expiration_in_ms = (String.new(encryptor.verify_and_decrypt(token))).split(\":\")\nTime.now.epoch_ms <= expiration_in_ms.to_i64 && (user_id.to_s == authenticatable.id.to_s)\n"}}],"constructors":[],"instance_methods":[{"id":"settings-instance-method","html_id":"settings-instance-method","name":"settings","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L34","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr#L34","def":{"name":"settings","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"Settings"}}],"macros":[],"types":[{"html_id":"github.com/luckyframework/authentic/Authentic/ActionHelpers","path":"Authentic/ActionHelpers.html","kind":"module","full_name":"Authentic::ActionHelpers(T)","name":"ActionHelpers","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"authentic/action_helpers.cr","line_number":2,"url":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr"}],"repository_name":"github.com/luckyframework/authentic","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"SIGN_IN_KEY","name":"SIGN_IN_KEY","value":"\"user_id\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/luckyframework/authentic/Authentic","kind":"module","full_name":"Authentic","name":"Authentic"},"doc":"Helpers methods for Lucky actions","summary":"<p>Helpers methods for Lucky actions</p>","class_methods":[],"constructors":[],"instance_methods":[{"id":"current_user:T?-instance-method","html_id":"current_user:T?-instance-method","name":"current_user","doc":"Returns the signed in user if signed in, otherwise returns `nil`\n\nThis method is often overriden by different modules/pipes. For example,\nWhen sign in is required this method is typically overridden by calling\n`not_nil!` since the user will always be returned.\n\nFor an example, see the `Auth::RequireSignIn` module in a newly generated\nLucky project.","summary":"<p>Returns the signed in user if signed in, otherwise returns <code>nil</code></p>","abstract":false,"args":[],"args_string":" : T?","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr#L23","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr#L23","def":{"name":"current_user","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"T | ::Nil","visibility":"Public","body":"current_user?"}},{"id":"current_user?:T?-instance-method","html_id":"current_user?:T?-instance-method","name":"current_user?","doc":"Return the signed in user if signed in, otherwise returns `nil`\n\nThis method should *not* be overridden. If you want to require a current user,\noverride the `current_user` method (note no `?`).","summary":"<p>Return the signed in user if signed in, otherwise returns <code>nil</code></p>","abstract":false,"args":[],"args_string":" : T?","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr#L31","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr#L31","def":{"name":"current_user?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"T | ::Nil","visibility":"Public","body":"id = session.get?(SIGN_IN_KEY)\nif id\n  find_current_user(id)\nend\n"}},{"id":"find_current_user(id):T-instance-method","html_id":"find_current_user(id):T-instance-method","name":"find_current_user","doc":null,"summary":null,"abstract":true,"args":[{"name":"id","doc":null,"default_value":"","external_name":"id","restriction":""}],"args_string":"(id) : T","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr#L38","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr#L38","def":{"name":"find_current_user","args":[{"name":"id","doc":null,"default_value":"","external_name":"id","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"T","visibility":"Public","body":""}},{"id":"sign_in(authenticatable:T):Void-instance-method","html_id":"sign_in(authenticatable:T):Void-instance-method","name":"sign_in","doc":"Signs a user in using the browser session.","summary":"<p>Signs a user in using the browser session.</p>","abstract":false,"args":[{"name":"authenticatable","doc":null,"default_value":"","external_name":"authenticatable","restriction":"T"}],"args_string":"(authenticatable : T) : Void","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr#L6","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr#L6","def":{"name":"sign_in","args":[{"name":"authenticatable","doc":null,"default_value":"","external_name":"authenticatable","restriction":"T"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Void","visibility":"Public","body":"session.set(SIGN_IN_KEY, authenticatable.id.to_s)"}},{"id":"sign_out:Void-instance-method","html_id":"sign_out:Void-instance-method","name":"sign_out","doc":"Sign the user out by clearing the session.","summary":"<p>Sign the user out by clearing the session.</p>","abstract":false,"args":[],"args_string":" : Void","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr#L11","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/action_helpers.cr#L11","def":{"name":"sign_out","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Void","visibility":"Public","body":"session.clear"}}],"macros":[],"types":[]},{"html_id":"github.com/luckyframework/authentic/Authentic/FormHelpers","path":"Authentic/FormHelpers.html","kind":"module","full_name":"Authentic::FormHelpers","name":"FormHelpers","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"authentic/form_helpers.cr","line_number":7,"url":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/form_helpers.cr"}],"repository_name":"github.com/luckyframework/authentic","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/luckyframework/authentic/Authentic","kind":"module","full_name":"Authentic","name":"Authentic"},"doc":"Base form class for setting up and validating an Authentic form\n\nThis is typically used for a sign in form and a password reset request form.\n\nTo see an example, Lucky projects are generated with a `SignInForm` and\n`PasswordResetRequestForm` that use this.","summary":"<p>Base form class for setting up and validating an Authentic form</p>","class_methods":[],"constructors":[],"instance_methods":[{"id":"find_authenticatable-instance-method","html_id":"find_authenticatable-instance-method","name":"find_authenticatable","doc":null,"summary":null,"abstract":true,"args":[],"args_string":"","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/form_helpers.cr#L26","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/form_helpers.cr#L26","def":{"name":"find_authenticatable","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":""}},{"id":"submit(&block)-instance-method","html_id":"submit(&amp;block)-instance-method","name":"submit","doc":"Run validations and yield the form and the authenticatable if valid\n\nWhen you call `submit` the form will find the authenticatable, pass it to\nyour form's `validate` method and then yield the form and the\n`authenticatable` if the `authenticatable` is found and the form is valid.","summary":"<p>Run validations and yield the form and the authenticatable if valid</p>","abstract":false,"args":[],"args_string":"(&block)","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/form_helpers.cr#L13","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/form_helpers.cr#L13","def":{"name":"submit","args":[],"double_splat":null,"splat_index":null,"yields":2,"block_arg":null,"return_type":"","visibility":"Public","body":"authenticatable = find_authenticatable\nvalidate(authenticatable)\nif valid?\n  yield self, authenticatable\nelse\n  yield self, nil\nend\n"}},{"id":"validate(authenticatable)-instance-method","html_id":"validate(authenticatable)-instance-method","name":"validate","doc":null,"summary":null,"abstract":true,"args":[{"name":"authenticatable","doc":null,"default_value":"","external_name":"authenticatable","restriction":""}],"args_string":"(authenticatable)","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/form_helpers.cr#L24","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/form_helpers.cr#L24","def":{"name":"validate","args":[{"name":"authenticatable","doc":null,"default_value":"","external_name":"authenticatable","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":""}}],"macros":[],"types":[]},{"html_id":"github.com/luckyframework/authentic/Authentic/PasswordAuthenticatable","path":"Authentic/PasswordAuthenticatable.html","kind":"module","full_name":"Authentic::PasswordAuthenticatable","name":"PasswordAuthenticatable","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"authentic/password_authenticatable.cr","line_number":1,"url":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/password_authenticatable.cr"}],"repository_name":"github.com/luckyframework/authentic","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/luckyframework/authentic/Authentic","kind":"module","full_name":"Authentic","name":"Authentic"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[{"id":"encrypted_password:String-instance-method","html_id":"encrypted_password:String-instance-method","name":"encrypted_password","doc":null,"summary":null,"abstract":true,"args":[],"args_string":" : String","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/password_authenticatable.cr#L3","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/password_authenticatable.cr#L3","def":{"name":"encrypted_password","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"String","visibility":"Public","body":""}},{"id":"id-instance-method","html_id":"id-instance-method","name":"id","doc":null,"summary":null,"abstract":true,"args":[],"args_string":"","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/password_authenticatable.cr#L2","source_link":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic/password_authenticatable.cr#L2","def":{"name":"id","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":""}}],"macros":[],"types":[]},{"html_id":"github.com/luckyframework/authentic/Authentic/Settings","path":"Authentic/Settings.html","kind":"class","full_name":"Authentic::Settings","name":"Settings","abstract":false,"superclass":{"html_id":"github.com/luckyframework/authentic/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/luckyframework/authentic/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/luckyframework/authentic/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"authentic.cr","line_number":34,"url":"https://github.com/luckyframework/authentic/blob/36b53db4f9ab3d72f648a5bf432c775467a1562e/src/authentic.cr"}],"repository_name":"github.com/luckyframework/authentic","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/luckyframework/authentic/Authentic","kind":"module","full_name":"Authentic","name":"Authentic"},"doc":null,"summary":null,"class_methods":[{"id":"default_password_reset_time_limit-class-method","html_id":"default_password_reset_time_limit-class-method","name":"default_password_reset_time_limit","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":null,"source_link":null,"def":{"name":"default_password_reset_time_limit","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@default_password_reset_time_limit.not_nil!"}},{"id":"default_password_reset_time_limit=(value:Time::Span)-class-method","html_id":"default_password_reset_time_limit=(value:Time::Span)-class-method","name":"default_password_reset_time_limit=","doc":null,"summary":null,"abstract":false,"args":[{"name":"value","doc":null,"default_value":"","external_name":"value","restriction":"Time::Span"}],"args_string":"(value : Time::Span)","source_link":null,"source_link":null,"def":{"name":"default_password_reset_time_limit=","args":[{"name":"value","doc":null,"default_value":"","external_name":"value","restriction":"Time::Span"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@default_password_reset_time_limit = value"}},{"id":"default_password_reset_time_limit?-class-method","html_id":"default_password_reset_time_limit?-class-method","name":"default_password_reset_time_limit?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":null,"source_link":null,"def":{"name":"default_password_reset_time_limit?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@default_password_reset_time_limit"}},{"id":"encryption_cost-class-method","html_id":"encryption_cost-class-method","name":"encryption_cost","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":null,"source_link":null,"def":{"name":"encryption_cost","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@encryption_cost.not_nil!"}},{"id":"encryption_cost=(value:Int32)-class-method","html_id":"encryption_cost=(value:Int32)-class-method","name":"encryption_cost=","doc":null,"summary":null,"abstract":false,"args":[{"name":"value","doc":null,"default_value":"","external_name":"value","restriction":"Int32"}],"args_string":"(value : Int32)","source_link":null,"source_link":null,"def":{"name":"encryption_cost=","args":[{"name":"value","doc":null,"default_value":"","external_name":"value","restriction":"Int32"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@encryption_cost = value"}},{"id":"encryption_cost?-class-method","html_id":"encryption_cost?-class-method","name":"encryption_cost?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":null,"source_link":null,"def":{"name":"encryption_cost?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@encryption_cost"}},{"id":"secret_key-class-method","html_id":"secret_key-class-method","name":"secret_key","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":null,"source_link":null,"def":{"name":"secret_key","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@secret_key.not_nil!"}},{"id":"secret_key=(value:String)-class-method","html_id":"secret_key=(value:String)-class-method","name":"secret_key=","doc":null,"summary":null,"abstract":false,"args":[{"name":"value","doc":null,"default_value":"","external_name":"value","restriction":"String"}],"args_string":"(value : String)","source_link":null,"source_link":null,"def":{"name":"secret_key=","args":[{"name":"value","doc":null,"default_value":"","external_name":"value","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@secret_key = value"}},{"id":"secret_key?-class-method","html_id":"secret_key?-class-method","name":"secret_key?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":null,"source_link":null,"def":{"name":"secret_key?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@@secret_key"}}],"constructors":[],"instance_methods":[],"macros":[],"types":[]}]}]}})