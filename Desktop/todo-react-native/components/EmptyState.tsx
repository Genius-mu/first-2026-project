// import { View, Text } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useTheme } from "@/hooks/useTheme";

// export const EmptyState: React.FC<{ message: string }> = ({ message }) => {
//   const { colors } = useTheme();

//   return (
//     <View style={emptyStyles.container}>
//       <Ionicons name="list-outline" size={80} color={colors.textSecondary} />
//       <Text style={[emptyStyles.text, { color: colors.textSecondary }]}>
//         {message}
//       </Text>
//     </View>
//   );
// };

import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export const EmptyState: React.FC<{ message: string }> = ({ message }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Ionicons name="list-outline" size={80} color={colors.textSecondary} />
      <Text style={[styles.text, { color: colors.textSecondary }]}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  text: {
    fontSize: 18,
    marginTop: 16,
    textAlign: "center",
  },
});
