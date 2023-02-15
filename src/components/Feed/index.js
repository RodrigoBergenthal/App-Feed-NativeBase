import React from "react";
import { Box, Image, Heading, Text, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons'

export default function Feed({ data }) {
    return (
        <Box flex={1}
            flexDirection='column'
            marginBottom={4}
            bg="#ffff"
            padding={2}
            borderRadius={4}
        >
            <Box>
                <Image
                    source=
                    {{ uri: data.avatarUrl }}
                    alt="Post Feed"
                    w='100%'
                    h={120}
                />
                <Box marginY={3}>
                    <Heading size='sm' paddingBottom={1}>
                        Aprendendo UI moderna com Native-Base
                    </Heading>
                    <Text numberOfLines={2}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos</Text>

                </Box>
                <Box 
                marginY={1} 
                flexDirection='row'
                backgroundColor="rgba(226,232,240,0.4)"
                alignSelf='flex-start'
                paddingX={3}
                borderRadius='6'
                paddingY={1}
                >
                    <Icon 
                    as={Feather}
                    name='user'
                    size={5}
                    color="#000"
                    marginRight={2}
                    />
                    <Text numberOfLines={1}>
                        {data.fullName}
                    </Text>

                </Box>
            </Box>
        </Box>
    )
}