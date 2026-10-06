import { useState } from "react";
import { FlatList, View, Text, Image } from "react-native";


import {
  CategoryButton,
  CategoryText,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  SearchInput,
} from "./styles";

export default function Home() {
  const [category, setCategory] = useState("todos");
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      title: "Camiseta Esportiva",
      price: 79.9,
      category: "roupas",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      title: "Tênis de Corrida",
      price: 299.9,
      category: "tênis",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 3,
      title: "Boné Esportivo",
      price: 59.9,
      category: "acessórios",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    },
    {
      id: 4,
      title: "Kit Academia",
      price: 149.9,
      category: "kits",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
    {
      id: 5,
      title: "Camiseta Preta",
      price: 69.9,
      category: "roupas",
      image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234",
    },
    {
      id: 6,
      title: "Tênis Casual",
      price: 249.9,
      category: "tênis",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 7,
      title: "Relógio Esportivo",
      price: 199.9,
      category: "acessórios",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 8,
      title: "Kit Corrida",
      price: 349.9,
      category: "kits",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
    },
    {
      id: 9,
      title: "Moletom Esportivo",
      price: 159.9,
      category: "roupas",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    },
    {
      id: 10,
      title: "Tênis Esportivo",
      price: 399.9,
      category: "tênis",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    },
    {
      id: 11,
      title: "Mochila Esportiva",
      price: 129.9,
      category: "acessórios",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
    {
      id: 12,
      title: "Kit Treino",
      price: 219.9,
      category: "kits",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be50106",
    },
    {
      id: 13,
      title: "Short Esportivo",
      price: 89.9,
      category: "roupas",
      image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
    },
    {
      id: 14,
      title: "Tênis Branco",
      price: 279.9,
      category: "tênis",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 15,
      title: "Óculos Esportivo",
      price: 99.9,
      category: "acessórios",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    },
    {
      id: 16,
      title: "Kit Academia Completo",
      price: 499.9,
      category: "kits",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    },
    {
      id: 17,
      title: "Regata Esportiva",
      price: 64.9,
      category: "roupas",
      image: "https://images.unsplash.com/photo-1506629905607-d9c297d7b3d0",
    },
    {
      id: 18,
      title: "Tênis para Academia",
      price: 329.9,
      category: "tênis",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    },
    {
      id: 19,
      title: "Boné Preto",
      price: 49.9,
      category: "acessórios",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b",
    },
    {
      id: 20,
      title: "Kit Esportivo",
      price: 299.9,
      category: "kits",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    },
  ];

  const categories = [
    "todos",
    "roupas",
    "tênis",
    "acessórios",
    "kits",
  ];

  const produtosFiltrados = products.filter((product) => {
    const nome = product.title.toLowerCase();
    const pesquisa = search.toLowerCase();

    return (
      nome.includes(pesquisa) &&
      (category === "todos" || product.category === category)
    );
  });

  return (
    <View
      style={{

        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
      }}
    >
      <SearchInput
        placeholder="Pesquisar produto"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryButton onPress={() => setCategory(item)}>
            <CategoryText>{item}</CategoryText>
          </CategoryButton>
        )}
      />
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard>
            <ProductImage source={{ uri: item.image }} />

            <ProductInfo>
              <ProductTitle>{item.title}</ProductTitle>

              <ProductPrice>
                R$ {item.price.toFixed(2)}
              </ProductPrice>
            </ProductInfo>
          </ProductCard>
        )}
      />
    </View>
  );
}