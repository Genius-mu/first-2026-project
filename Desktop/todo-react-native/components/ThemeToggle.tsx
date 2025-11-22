// import { useTheme } from "@/hooks/useTheme";
// import { TouchableOpacity, Text, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// export const ThemeToggle: React.FC = () => {
//   const { theme, colors, toggleTheme } = useTheme();

//   return (
//     <TouchableOpacity
//       style={[themeStyles.container, { backgroundColor: colors.surface }]}
//       onPress={toggleTheme}
//       activeOpacity={0.7}
//     >
//       <Ionicons
//         name={theme === 'light' ? 'sunny' : 'moon'}
//         size={24}
//         color={colors.primary}
//       />
//       <Text style={[themeStyles.text, { color: colors.text }]}>
//         {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
//       </Text>
//     </TouchableOpacity>
//   );
// };

import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ThemeToggle: React.FC = () => {
  const { theme, colors, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.surface }]}
      onPress={toggleTheme}
      activeOpacity={0.7}
    >
      <Ionicons
        name={theme === "light" ? "sunny" : "moon"}
        size={24}
        color={colors.primary}
      />
      <Text style={[styles.text, { color: colors.text }]}>
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    gap: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
