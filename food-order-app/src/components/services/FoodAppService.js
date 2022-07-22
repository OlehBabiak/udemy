class FoodAppService {
	_apiBase = 'http://localhost:3000'
	
	getResource = async ( url ) => {
		let res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${ url }, status: ${ res.status }`);
		}
		return await res.json();
	};
	
	getRestMenu = async ( end ) => {
		const res = await this.getResource(
			`${ this._apiBase }/${ end }`
		);
		return res.map(el => this._transformCharacter(el));
	};
	
	_transformCharacter = ( res ) => {
		//отрримуєм обєкт тільки з потрібними полями
		return {
			name: res.name,
			description: res.description,
			price: res.price,
			id: res.id,
		};
	};
	
	postResource = async (url, data) => {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: data,
		});
		if (!res.ok) {
			throw new Error(`Could not fetch ${ url }, status: ${ res.status }`);
		}
		console.log('postRes ', res)
		return await res.json();
	};
	
	postRestOrder = async (data) => {
		return await this.postResource(`${ this._apiBase }/requests`, data)
	}
}

export default FoodAppService
