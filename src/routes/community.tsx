import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { MOCK_COMMUNITY_POSTS } from "@/lib/mockData";
import { Users, ThumbsUp, MessageSquare, Share2, Plus, Send } from "lucide-react";

export const Route = createFileRoute("/community")({
  component: CommunityPageUI,
});

function CommunityPageUI() {
  const [posts, setPosts] = useState(MOCK_COMMUNITY_POSTS);
  const [newPostText, setNewPostText] = useState("");

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPostText.trim()) {
      const newPost = {
        id: `post-${Date.now()}`,
        author: "Ramesh Kumar",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        time: "Just now",
        content: newPostText,
        likes: 0,
        comments: 0,
      };
      setPosts([newPost, ...posts]);
      setNewPostText("");
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="eyebrow block text-xs text-saffron">DEVOTEES NETWORK</span>
            <h1 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              Ayyappa Bhakthan Community
              <Users className="w-6 h-6 text-saffron" />
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Connect with fellow pilgrims, share Satsang photos, join local Yathra groups.
            </p>
          </div>
        </div>

        {/* Create Post Box */}
        <div className="bg-card border border-gold/30 rounded-3xl p-5 shadow-sm space-y-3">
          <h3 className="font-bold text-xs text-foreground">Share Satsang / Journey Update</h3>
          <textarea
            rows={3}
            placeholder="Write a message to fellow Ayyappa devotees..."
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            className="w-full p-3 rounded-2xl bg-ivory border border-gold/30 text-xs outline-none focus:ring-2 focus:ring-saffron text-ink resize-none"
          />
          <div className="flex justify-end">
            <button
              onClick={handleCreatePost}
              className="px-5 py-2.5 rounded-xl bg-gradient-devotional text-white font-bold text-xs shadow hover:opacity-95 transition flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> POST MESSAGE
            </button>
          </div>
        </div>

        {/* Feed Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-card border border-gold/30 rounded-3xl p-5 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover border border-gold/30" />
                <div>
                  <h4 className="font-bold text-xs text-foreground">{post.author}</h4>
                  <span className="text-[10px] text-muted-foreground block">{post.time}</span>
                </div>
              </div>

              <p className="text-xs text-foreground leading-relaxed">{post.content}</p>

              {post.image && (
                <div className="rounded-2xl overflow-hidden max-h-72 border border-gold/20">
                  <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="flex items-center gap-6 pt-2 border-t border-border/40 text-xs text-muted-foreground">
                <button className="flex items-center gap-1.5 hover:text-saffron font-semibold">
                  <ThumbsUp className="w-4 h-4" /> {post.likes} Likes
                </button>
                <button className="flex items-center gap-1.5 hover:text-saffron font-semibold">
                  <MessageSquare className="w-4 h-4" /> {post.comments} Comments
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
