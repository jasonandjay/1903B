import { ConnectRC, connect, Loading } from "umi";
import {Spin} from 'antd';

interface IProps{
    loading: boolean;
}
const GlobalLoading: ConnectRC<IProps> = props=>{
    if (props.loading){
        return <Spin className="loading" size="large"/>
    }
    return null;
}

const mapStateToProps = ({loading}: {loading:Loading}) =>{
    return {loading: loading.global};
}
export default connect(mapStateToProps)(GlobalLoading);