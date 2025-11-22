// import { useTheme } from "@/hooks/useTheme";

// export const LoadingSpinner: React.FC = () => {
//   const { colors } = useTheme();

//   return (
//     <View style={loadingStyles.container}>
//       <ActivityIndicator size="large" color={colors.primary} />
//       <Text style={[loadingStyles.text, { color: colors.textSecondary }]}>
//         Loading...
//       </Text>
//     </View>
//   );
// };

import { useTheme } from "@/hooks/useTheme";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const LoadingSpinner: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={[styles.text, { color: colors.textSecondary }]}>
        Loading...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 12,
    fontSize: 16,
  },
});
