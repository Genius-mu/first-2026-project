import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { useTheme } from "../hooks/useTheme";

interface TodoItemProps {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  completed: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  title,
  description,
  dueDate,
  completed,
  onToggle,
  onEdit,
  onDelete,
}) => {
  const { colors } = useTheme();

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<string | number>,
    dragX: Animated.AnimatedInterpolation<string | number>
  ) => {
    return (
      <View style={styles.deleteContainer}>
        <TouchableOpacity
          style={[styles.deleteButton, { backgroundColor: colors.danger }]}
          onPress={onDelete}
        >
          <Ionicons name="trash" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={[styles.container, { backgroundColor: colors.card }]}>
        {/* Checkbox */}
        <TouchableOpacity onPress={onToggle} style={styles.checkbox}>
          <View
            style={[
              styles.checkboxInner,
              {
                borderColor: colors.primary,
                backgroundColor: completed ? colors.primary : "transparent",
              },
            ]}
          >
            {completed && <Ionicons name="checkmark" size={18} color="#fff" />}
          </View>
        </TouchableOpacity>

        {/* Text Content */}
        <View style={styles.content}>
          <Text
            style={[
              styles.title,
              { color: colors.text },
              completed && styles.completedText,
            ]}
          >
            {title}
          </Text>

          {description && (
            <Text
              style={[
                styles.description,
                { color: colors.textSecondary },
                completed && styles.completedText,
              ]}
            >
              {description}
            </Text>
          )}

          {dueDate && (
            <Text style={[styles.dueDate, { color: colors.primary }]}>
              Due: {new Date(dueDate).toLocaleDateString()}
            </Text>
          )}
        </View>

        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Ionicons name="pencil" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  checkbox: {
    padding: 4,
  },
  checkboxInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  dueDate: {
    fontSize: 12,
    fontWeight: "500",
  },
  completedText: {
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
  editButton: {
    padding: 8,
  },
  deleteContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: "90%",
    borderRadius: 12,
  },
});
