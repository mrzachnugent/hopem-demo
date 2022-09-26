import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { trpc } from '../utils/trpc';

export const HomeScreen = () => {
  const postQuery = trpc.post.all.useQuery();

  return (
    <FlatList
      contentContainerStyle={{ margin: 75 }}
      ListHeaderComponent={
        <Text
          style={{
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
            textDecorationColor: 'black',
            textAlign: 'center',
          }}
        >
          Data from tRPC:
        </Text>
      }
      data={postQuery.data}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      )}
    />
  );
};
