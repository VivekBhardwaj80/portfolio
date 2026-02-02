import { Request, Response } from "express";
import Projects from "../models/project.model.js";
import Skill from "../models/skill.model.js";
import Feedback from "../models/feedback.model.js";
import { IResponse } from "../interfaces/responseInterface.js";

const adminDash = async (req: Request, res: Response): Promise<void> => {
  try {
    const recentProject = await Projects.find()
      .select("-password")
      .sort({ createdAt: -1 })
      .limit(3);
    const totalProject = await Projects.countDocuments();
    const totalFeedback = await Feedback.countDocuments();
    const totalSkill = await Skill.countDocuments();

    const fetchSkill = await Skill.find().select("name level -_id");

    // Simple skill mapping
    const skillNumber: Record<string, number> = {
      beginner: 1,
      intermediate: 2,
      expert: 3,
    };

    const levelNumber = fetchSkill.map((skill) => {
      const levelKey = skill.level?.toLowerCase().trim() || "beginner";
      return {
        name: skill.name,
        value: skillNumber[levelKey] || 1, // Default to 1
      };
    });

    const totalWeight = levelNumber.reduce(
      (sum, skill) => sum + skill.value,
      0,
    );


    const skillDistribution = levelNumber.map((level) => {
      const percentage = totalWeight
        ? parseFloat(((level.value / totalWeight) * 100).toFixed(1))
        : 0;



      return {
        name: level.name,
        percentage: percentage,
        value: level.value,
      };
    });

    res.status(200).json({
      success: true,
      message: "Admin data",
      data: {
        totals: {
          projects: totalProject,
          skills: totalSkill,
          feedback: totalFeedback,
        },
        recentProjects: recentProject,
        skillDistribution,
      },
    } as IResponse);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "internal admin dash error",
      error: error.message,
    } as IResponse);
  }
};

export default adminDash;
