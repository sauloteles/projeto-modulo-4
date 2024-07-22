
let listUnit = [
    {
        states: [
            {
                region: "Região Norte",
                states: [
                    {
                        id: 19,
                        name: "Acre",
                        region: "Região Norte",
                        unity: [
                            {
                                title: "Hemoacre",
                                the_content: "Av. Getúlio Vargas, 2787 - Vila Ivonete - Rio Branco, Acre - Cep:69914-500",
                                map: "https://www.google.com.br/maps/place/Avenida+Getúlio+Vargas,+2787+-+Bosque,+Rio+Branco+-+AC,+Brazil/@-9.9537615,-67.8188671",
                                tel: "(68)32481377  ",
                                cep: "69914-500"
                            }
                        ]
                    },
                ]
            },

            {
                region: "Região Nordeste",
                states: [
                    {
                        id: 20,
                        name: "Alagoas",
                        region: "Região Nordeste",
                        unity: [
                            {
                                title: "Hemocentro De Alagoas – Hemoal",
                                the_content: "Av. Jorge De Lima, 58 - Trapiche - Maceio, Alagoas - Cep:57010-300",
                                map: "https://www.google.com.br/maps/place/Rua+Doutor+Jorge+de+Lima,+58+-+Trapiche+da+Barra,+Maceió+-+AL,+57010-382,+Brazil/@-9.672467,-35.7582896",
                                tel: "(82)33152107",
                                cep: "57010-300"
                            }
                        ]
                    }
                ]

            },
            {
                region: "Região Centro-Oeste",
                states: [
                    {
                        id: 25,
                        name: "Distrito Federal",
                        region: "Região Centro-Oeste",
                        unity: [
                            {
                                title: "Fundação Hemocentro De Brasília",
                                the_content: "Smhn, 03 Qd.03 Conj.a Bloco03 - Asa Norte - Brasilia, Distrito Federal - Cep:70710-908",
                                map: "https://www.google.com.br/maps/place/Hospital+Regional+da+Asa+Norte+-+Brasília,+Brasília+-+DF,+Brazil/@-15.7856713,-47.8828645",
                                tel: "(61)33274447  <br> (61)33274413",
                                cep: "70710-908"
                            }
                        ]
                    }
                ]
            }, {
                region: "Região Sudeste",
                states: [{

                    id: 26,
                    name: "Espírito Santo",
                    region: "Região Sudeste",
                    unity: [
                        {
                            title: "Hemoes",
                            the_content: "Av Mal Campos, 1468 - Maruípe - Vitoria, Espírito Santo - Cep:29045-460",
                            map: "https://www.google.com.br/maps/place/Avenida+Marechal+Campos,+1468+-+Nazareth,+Vitória+-+ES,+29047-100,+Brazil/@-20.2979169,-40.3169339",
                            tel: "(27)36367925 <br> (27)36367920",
                            cep: "29045-460"
                        }
                    ]
                }

                ]
            }

        ]
    }
]


export const getAllUnit = () => {
    return listUnit
}
