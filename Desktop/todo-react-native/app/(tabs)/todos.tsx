import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { EmptyState } from "../../components/EmptyState";
import { SearchBar } from "../../components/SearchBar";
import { TodoForm } from "../../components/TodoForm";
import { TodoItem } from "../../components/TodoItem";
import { api } from "../../convex/_generated/api";
import { useTheme } from "../../hooks/useTheme";

type FilterType = "all" | "active" | "completed";

interface Todo {
  _id: string;
  title: string;
  description?: string;
  dueDate?: string;
  completed: boolean;
  createdAt: number;
  order: number;
}

export default function TodosScreen() {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  // Convex queries and mutations
  const todos = useQuery(api.todos.getTodos) ?? [];
  const createTodo = useMutation(api.todos.createTodo);
  const updateTodo = useMutation(api.todos.updateTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const reorderTodos = useMutation(api.todos.reorderTodos);

  // Filter and search todos
  const filteredTodos = useMemo(() => {
    let result = [...todos];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (todo) =>
          todo.title.toLowerCase().includes(query) ||
          todo.description?.toLowerCase().includes(query)
      );
    }

    // Apply status filter
    switch (filter) {
      case "active":
        result = result.filter((todo) => !todo.completed);
        break;
      case "completed":
        result = result.filter((todo) => todo.completed);
        break;
    }

    // Sort by order (descending)
    return result.sort((a, b) => b.order - a.order);
  }, [todos, searchQuery, filter]);

  const handleCreateTodo = async (data: {
    title: string;
    description?: string;
    dueDate?: string;
  }) => {
    try {
      await createTodo(data);
      Alert.alert("Success", "Todo created successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to create todo. Please try again.");
      console.error("Create todo error:", error);
    }
  };

  const handleUpdateTodo = async (data: {
    title: string;
    description?: string;
    dueDate?: string;
  }) => {
    if (!editingTodo) return;

    try {
      await updateTodo({
        id: editingTodo._id,
        ...data,
      });
      setEditingTodo(null);
      Alert.alert("Success", "Todo updated successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to update todo. Please try again.");
      console.error("Update todo error:", error);
    }
  };

  const handleDeleteTodo = (id: string, title: string) => {
    Alert.alert("Delete Todo", `Are you sure you want to delete "${title}"?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteTodo({ id: id as any });
          } catch (error) {
            Alert.alert("Error", "Failed to delete todo. Please try again.");
            console.error("Delete todo error:", error);
          }
        },
      },
    ]);
  };

  const handleToggleTodo = async (id: string) => {
    try {
      await toggleTodo({ id: id as any });
    } catch (error) {
      Alert.alert("Error", "Failed to update todo status. Please try again.");
      console.error("Toggle todo error:", error);
    }
  };

  const handleDragEnd = async ({ data }: { data: Todo[] }) => {
    try {
      // Update order based on new positions
      const updates = data.map((item, index) => ({
        id: item._id,
        order: data.length - index, // Reverse order for descending sort
      }));
      await reorderTodos({ updates });
    } catch (error) {
      Alert.alert("Error", "Failed to reorder todos. Please try again.");
      console.error("Reorder error:", error);
    }
  };

  const renderFilterButton = (
    type: FilterType,
    label: string,
    icon: keyof typeof Ionicons.glyphMap
  ) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        {
          backgroundColor: filter === type ? colors.primary : colors.surface,
        },
      ]}
      onPress={() => setFilter(type)}
      activeOpacity={0.7}
    >
      <Ionicons
        name={icon}
        size={18}
        color={filter === type ? "#FFFFFF" : colors.text}
      />
      <Text
        style={[
          styles.filterButtonText,
          { color: filter === type ? "#FFFFFF" : colors.text },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderTodoItem = ({ item, drag, isActive }: RenderItemParams<Todo>) => (
    <ScaleDecorator>
      <View style={{ opacity: isActive ? 0.5 : 1 }}>
        <TouchableOpacity
          onLongPress={drag}
          delayLongPress={200}
          disabled={isActive}
        >
          <TodoItem
            id={item._id}
            title={item.title}
            description={item.description}
            dueDate={item.dueDate}
            completed={item.completed}
            onToggle={() => handleToggleTodo(item._id)}
            onEdit={() => {
              setEditingTodo(item);
              setIsFormVisible(true);
            }}
            onDelete={() => handleDeleteTodo(item._id, item.title)}
          />
        </TouchableOpacity>
      </View>
    </ScaleDecorator>
  );

  const stats = {
    total: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  // Loading state
  if (todos === undefined) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, { color: colors.textSecondary }]}>
            Loading todos...
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.card }]}>
        <View>
          <Text style={[styles.headerTitle, { color: colors.text }]}>
            My Todos
          </Text>
          <Text
            style={[styles.headerSubtitle, { color: colors.textSecondary }]}
          >
            {stats.active} active • {stats.completed} completed
          </Text>
        </View>
      </View>

      {/* Search Bar */}
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

      {/* Filters */}
      <View style={styles.filterContainer}>
        {renderFilterButton("all", "All", "list")}
        {renderFilterButton("active", "Active", "radio-button-off")}
        {renderFilterButton("completed", "Completed", "checkmark-circle")}
      </View>

      {/* Todo List */}
      {filteredTodos.length === 0 ? (
        <EmptyState
          message={
            searchQuery
              ? "No todos found matching your search"
              : filter === "all"
                ? "No todos yet. Tap + to create one!"
                : filter === "active"
                  ? "No active todos. Great job!"
                  : "No completed todos yet"
          }
        />
      ) : (
        <DraggableFlatList
          data={filteredTodos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          onDragEnd={handleDragEnd}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Floating Action Button */}
      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.primary }]}
        onPress={() => {
          setEditingTodo(null);
          setIsFormVisible(true);
        }}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={32} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Todo Form Modal */}
      <TodoForm
        visible={isFormVisible}
        onClose={() => {
          setIsFormVisible(false);
          setEditingTodo(null);
        }}
        onSubmit={editingTodo ? handleUpdateTodo : handleCreateTodo}
        initialData={
          editingTodo
            ? {
                title: editingTodo.title,
                description: editingTodo.description,
                dueDate: editingTodo.dueDate,
              }
            : undefined
        }
        mode={editingTodo ? "edit" : "create"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
  },
  filterContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 12,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 6,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  listContent: {
    paddingBottom: 100,
    paddingTop: 8,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
  },
});
