namespace $.$$ {

	export class $hyoo_realworld_profile_page extends $.$hyoo_realworld_profile_page {

		sign_out() {
			this.$.$hyoo_realworld_domain.sign_out()
			this.$.$mol_state_arg.value( 'person' , null ) 
			this.$.$mol_state_arg.value( 'section' , 'articles' )
		}

	}

}
