import React from 'react'
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native'

const colorGitHub = '#010409';
const imageGitHub = 'https://avatars.githubusercontent.com/u/61121425?v=4' 
const colorFontGitHub = '#C9D1D9'
const colorDarkFontGitHub = '#4F565E'
const urlToMyGitHub = 'https://github.com/alexia-raphaela'

const App = () => {
    // passa para a view o stylesheet criado para container
    const handlePressGoToGitHub = async () => {
        console.log('Verificando link')
        const res = await Linking.canOpenURL(urlToMyGitHub)
        if(res) {
            console.log('link aprovado')
            await Linking.openURL(urlToMyGitHub)
      }
    }

    return (
        <SafeAreaView style={style.container}> 
            <StatusBar backgroundColor={colorGitHub} barStyle="dark-content"></StatusBar>
            <View style={style.content}>
                 <Image accessibilityLabel='foto de perfil da Aléxia Raphaela' style={style.avatar} source={{uri: imageGitHub}}/>
                 <Text accessibilityLabel='Aléxia Raphaela' style={[style.defaultText, style.name]}>Alexia Raphaela</Text>
                 <Text accessibilityLabel='Aléxia Raphaela Da Silva' style={[style.defaultText, style.nickname]}>alexiaraphaelaSilva</Text>
                 <Text accessibilityLabel='aluna impacta em análise e desenvolvimento de sistemas'style={[style.defaultText, style.discription]}>aluna impacta em análise e desenvolvimento de sistemas</Text>
                 <Text style={style.defaultText}>2 followers · 1 following</Text>
             </View>
             <Pressable onPress={handlePressGoToGitHub}>
                <View style={style.button}>
                    <Text style={[style.defaultText]}>Open in GitHub</Text>
                 </View>
             </Pressable>
        </SafeAreaView>
    )
}

export default App;

// cria um estilo
const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,

    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1,
    },
    defaultText: {
        color: colorFontGitHub,
        
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGitHub,
    },
    discription: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 10,
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    }

});

