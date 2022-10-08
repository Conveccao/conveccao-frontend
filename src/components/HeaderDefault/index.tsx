import { 
    Header, 
    Content,
    Title 
} from './styles'


type HeaderProps = {
    title: string;
}

export function HeaderDefault({title}: HeaderProps) {
    return(
        <Header>
            <Content>
                <Title>
                    {title}
                </Title>
            </Content>
        </Header>
    );
}
