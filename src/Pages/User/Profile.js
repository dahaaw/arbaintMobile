import {Row,Col} from 'react-bootstrap';
import {Avatar} from 'antd';
import { 
    SettingTwoTone,
    SwapOutlined,
    HeartOutlined,
    StarOutlined,
    EnvironmentOutlined,
    UserOutlined,
    TeamOutlined,
    SolutionOutlined
} from '@ant-design/icons';

const Profile = () => {
    return (
        <Row className="mt-2">
            <Col xs={12} className="text-center">
                <h6>PROFILE</h6>
            </Col>

            <Col>
                <Row>
                    <Col xs={2}>
                        <Avatar size={50} src="/logo192.png"/>
                    </Col>
                    <Col>
                        <b>Hamdan Awaludin</b>
                        <p><small>1.000.000 Poin</small></p>
                    </Col>
                    <Col xs={1}>
                        <div style={{marginLeft:-5}}>
                            <SettingTwoTone />
                        </div>
                    </Col>
                </Row>
                <hr/>
                <b>Aktivitas</b>    
                <p className="mb-1"><SwapOutlined style={{fontSize:23}}/> <small>Riwayat Transaksi</small></p>
                <p className="mb-1"><HeartOutlined style={{fontSize:23}}/> <small>Produk Disimpan</small></p>
                <p className="mb-1"><StarOutlined style={{fontSize:23}}/> <small>Ulasan Produk</small></p>
                <hr />
                <b>Akun</b>    
                <p className="mb-1"><UserOutlined style={{fontSize:23}}/> <small>Biodata</small></p>
                <p className="mb-1"><EnvironmentOutlined style={{fontSize:23}}/> <small>Daftar Alamat</small></p>
                <hr />
                <b>Bantuan</b>    
                <p className="mb-1"><SolutionOutlined style={{fontSize:23}}/> <small>Komplain</small></p>
                <p className="mb-1"><TeamOutlined style={{fontSize:23}}/> <small>Haiwah Care</small></p>
            </Col>


        </Row>
    )
}

export default Profile;