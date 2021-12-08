<script>
	import {login} from '@/services/'
	export default {
		onLaunch: async function() {
			console.log('App Launch')
			wx.login({
				success: async res=>{
					console.log('res...', res);
					if (res.errMsg === 'login:ok'){
						let result = await login(res.code);
						console.log('result:', result);
						// 存储登陆态
						if (result.access_token){
							wx.setStorageSync('access_token', result.token_type+result.access_token);	
						}
					}
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
