import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import React from "react";
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeToggle } from "../../components/ThemeToggle";
import { api } from "../../convex/_generated/api";
import { useTheme } from "../../hooks/useTheme";

export default function SettingsScreen() {
  const { colors, theme } = useTheme();
  const todos = useQuery(api.todos.getTodos) ?? [];

  const handleClearAllTodos = () => {
    Alert.alert(
      "Clear All Todos",
      "Are you sure you want to delete all todos? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear All",
          style: "destructive",
          onPress: () => {
            // This would require a Convex mutation to delete all
            Alert.alert(
              "Info",
              "This feature would clear all todos from the database"
            );
          },
        },
      ]
    );
  };

  const handleContactSupport = () => {
    Linking.openURL("mailto:support@todoapp.com?subject=Todo App Support");
  };

  const handleRateApp = () => {
    Alert.alert("Rate App", "Thank you for considering rating our app!");
  };

  const handleShareApp = () => {
    Alert.alert("Share App", "Share this amazing todo app with your friends!");
  };

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  };

  const completionRate =
    stats.total > 0 ? ((stats.completed / stats.total) * 100).toFixed(0) : 0;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.card }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Settings
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Statistics Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Statistics
          </Text>
          <View style={[styles.statsCard, { backgroundColor: colors.card }]}>
            <View style={styles.statRow}>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.primary }]}>
                  {stats.total}
                </Text>
                <Text
                  style={[styles.statLabel, { color: colors.textSecondary }]}
                >
                  Total Todos
                </Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.success }]}>
                  {stats.completed}
                </Text>
                <Text
                  style={[styles.statLabel, { color: colors.textSecondary }]}
                >
                  Completed
                </Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.warning }]}>
                  {stats.active}
                </Text>
                <Text
                  style={[styles.statLabel, { color: colors.textSecondary }]}
                >
                  Active
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.progressSection,
                { borderTopColor: colors.border },
              ]}
            >
              <View style={styles.progressHeader}>
                <Text style={[styles.progressLabel, { color: colors.text }]}>
                  Completion Rate
                </Text>
                <Text style={[styles.progressValue, { color: colors.primary }]}>
                  {completionRate}%
                </Text>
              </View>
              <View
                style={[
                  styles.progressBarContainer,
                  { backgroundColor: colors.surface },
                ]}
              >
                <View
                  style={[
                    styles.progressBar,
                    {
                      backgroundColor: colors.success,
                      width: `${completionRate}%`,
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Appearance
          </Text>
          <ThemeToggle />
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Preferences
          </Text>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: colors.card }]}
            activeOpacity={0.7}
          >
            <View style={styles.settingLeft}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={colors.primary}
              />
              <View style={styles.settingTextContainer}>
                <Text style={[styles.settingTitle, { color: colors.text }]}>
                  Notifications
                </Text>
                <Text
                  style={[
                    styles.settingSubtitle,
                    { color: colors.textSecondary },
                  ]}
                >
                  Get reminders for due dates
                </Text>
              </View>
            </View>
            <Switch
              value={false}
              onValueChange={() =>
                Alert.alert("Info", "Notifications feature coming soon!")
              }
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: colors.card }]}
            activeOpacity={0.7}
          >
            <View style={styles.settingLeft}>
              <Ionicons name="sync-outline" size={24} color={colors.primary} />
              <View style={styles.settingTextContainer}>
                <Text style={[styles.settingTitle, { color: colors.text }]}>
                  Auto Sync
                </Text>
                <Text
                  style={[
                    styles.settingSubtitle,
                    { color: colors.textSecondary },
                  ]}
                >
                  Automatically sync todos
                </Text>
              </View>
            </View>
            <Switch
              value={true}
              onValueChange={() =>
                Alert.alert("Info", "Auto sync is always enabled")
              }
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

        {/* Data Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Data Management
          </Text>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: colors.card }]}
            onPress={handleClearAllTodos}
            activeOpacity={0.7}
          >
            <View style={styles.settingLeft}>
              <Ionicons name="trash-outline" size={24} color={colors.danger} />
              <View style={styles.settingTextContainer}>
                <Text style={[styles.settingTitle, { color: colors.danger }]}>
                  Clear All Todos
                </Text>
                <Text
                  style={[
                    styles.settingSubtitle,
                    { color: colors.textSecondary },
                  ]}
                >
                  Delete all todos permanently
                </Text>
              </View>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: colors.card }]}
            onPress={() => Alert.alert("Export", "Export feature coming soon!")}
            activeOpacity={0.7}
          >
            <View style={styles.settingLeft}>
              <Ionicons
                name="download-outline"
                size={24}
                color={colors.primary}
              />
              <View style={styles.settingTextContainer}>
                <Text style={[styles.settingTitle, { color: colors.text }]}>
                  Export Data
                </Text>
                <Text
                  style={[
                    styles.settingSubtitle,
                    { color: colors.textSecondary },
                  ]}
                >
                  Export todos as JSON or CSV
                </Text>
              </View>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Support
          </Text>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: colors.card }]}
            onPress={handleRateApp}
            activeOpacity={0.7}
          >
            <View style={styles.settingLeft}>
              <Ionicons name="star-outline" size={24} color={colors.warning} />
              <Text style={[styles.settingTitle, { color: colors.text }]}>
                Rate App
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: colors.card }]}
            onPress={handleShareApp}
            activeOpacity={0.7}
          >
            <View style={styles.settingLeft}>
              <Ionicons
                name="share-social-outline"
                size={24}
                color={colors.primary}
              />
              <Text style={[styles.settingTitle, { color: colors.text }]}>
                Share App
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { backgroundColor: colors.card }]}
            onPress={handleContactSupport}
            activeOpacity={0.7}
          >
            <View style={styles.settingLeft}>
              <Ionicons name="mail-outline" size={24} color={colors.primary} />
              <Text style={[styles.settingTitle, { color: colors.text }]}>
                Contact Support
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            About
          </Text>
          <View style={[styles.aboutCard, { backgroundColor: colors.card }]}>
            <View style={styles.appIconContainer}>
              <Ionicons
                name="checkmark-circle"
                size={60}
                color={colors.primary}
              />
            </View>
            <Text style={[styles.appName, { color: colors.text }]}>
              Advanced Todo List
            </Text>
            <Text style={[styles.version, { color: colors.textSecondary }]}>
              Version 1.0.0
            </Text>
            <Text style={[styles.description, { color: colors.textSecondary }]}>
              A powerful and beautiful todo application built with React Native
              & Convex. Stay organized and productive every day!
            </Text>

            <View style={styles.techStack}>
              <View
                style={[styles.techBadge, { backgroundColor: colors.surface }]}
              >
                <Text style={[styles.techText, { color: colors.text }]}>
                  React Native
                </Text>
              </View>
              <View
                style={[styles.techBadge, { backgroundColor: colors.surface }]}
              >
                <Text style={[styles.techText, { color: colors.text }]}>
                  Convex
                </Text>
              </View>
              <View
                style={[styles.techBadge, { backgroundColor: colors.surface }]}
              >
                <Text style={[styles.techText, { color: colors.text }]}>
                  TypeScript
                </Text>
              </View>
            </View>

            <Text style={[styles.copyright, { color: colors.textSecondary }]}>
              © 2024 Advanced Todo List. All rights reserved.
            </Text>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={{ height: 40 }} />
      </ScrollView>
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
  },
  content: {
    flex: 1,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 16,
    marginBottom: 12,
  },
  statsCard: {
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    textAlign: "center",
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#E5E5EA",
  },
  progressSection: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  progressValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  progressBarContainer: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 4,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 12,
  },
  aboutCard: {
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appIconContainer: {
    marginBottom: 16,
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  version: {
    fontSize: 14,
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  techStack: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
    justifyContent: "center",
  },
  techBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  techText: {
    fontSize: 12,
    fontWeight: "600",
  },
  copyright: {
    fontSize: 11,
    textAlign: "center",
  },
});
