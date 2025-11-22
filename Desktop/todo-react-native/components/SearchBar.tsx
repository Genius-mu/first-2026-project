// import { useTheme } from "@/hooks/useTheme";

// export const SearchBar: React.FC<{
//   value: string;
//   onChangeText: (text: string) => void;
// }> = ({ value, onChangeText }) => {
//   const { colors } = useTheme();

//   return (
//     <View style={[searchStyles.container, { backgroundColor: colors.surface }]}>
//       <Ionicons name="search" size={20} color={colors.textSecondary} />
//       <TextInput
//         style={[searchStyles.input, { color: colors.text }]}
//         placeholder="Search todos..."
//         placeholderTextColor={colors.textSecondary}
//         value={value}
//         onChangeText={onChangeText}
//       />
//       {value.length > 0 && (
//         <TouchableOpacity onPress={() => onChangeText("")}>
//           <Ionicons
//             name="close-circle"
//             size={20}
//             color={colors.textSecondary}
//           />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export const SearchBar: React.FC<{
  value: string;
  onChangeText: (text: string) => void;
}> = ({ value, onChangeText }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Ionicons name="search" size={20} color={colors.textSecondary} />

      <TextInput
        style={[styles.input, { color: colors.text }]}
        placeholder="Search todos..."
        placeholderTextColor={colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
      />

      {value.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText("")}>
          <Ionicons
            name="close-circle"
            size={20}
            color={colors.textSecondary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 12,
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
