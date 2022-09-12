import { 
    Header, 
    Content,
    Image,
    Title 
} from './styles'

import LogoImg from '../../assets/images/logo.svg';

type HeaderProps = {
    title: string;
}

export default function HeaderDefault({title}: HeaderProps) {
    return(
        <Header>
            <Content>
                <Image src={LogoImg} alt="Convecção" />
                <Title>
                    {title}
                </Title>
            </Content>
        </Header>
    );
}
