const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			partners: [
				{
					user: "juan",
					password: "pollan"
				},
				{
					user: "Mattia",
					password: "Tozzi"
				}
			]
		},
		actions: {
			checkUser: (us, pa) => {
				const store = getStore();
				const partners = store.partners;

				partners.map(elements => {
					if (elements.user == us && elements.password == pa) {
						console.log("permiso para ingreos");
					}
				});
			},

			checkMail: mail => {
				console.log(mail);
			}
		}
	};
};

export default getState;
