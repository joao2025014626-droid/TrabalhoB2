import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  margin-bottom: 15px;
`;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SearchInput = styled.TextInput`
  height: 45px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
`;

export const CategoryButton = styled.Pressable`
  background-color: #f7f2f2;
  padding: 10px;
  margin-right: 8px;
  border-radius: 8px;
`;

export const CategoryText = styled.Text`
  font-size: 14px;
`;

export const ProductCard = styled.View`

  margin: 5px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 8px;
`;

export const ProductInfo = styled.View`
  padding: 5px;
`;

export const ProductTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  margin-top: 5px;
`;

export const ProductRating = styled.Text`
  font-size: 12px;
  color: #f8f1f1;
`;

export const EmptyText = styled.Text`
  text-align: center;
  margin-top: 20px;
`;
