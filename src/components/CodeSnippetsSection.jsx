import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Code, 
  Copy, 
  Check, 
  FileText,
  Terminal
} from 'lucide-react';

const CodeSnippetsSection = () => {
  const [activeLanguage, setActiveLanguage] = useState('python');
  const [copiedCode, setCopiedCode] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const codeSnippets = {
    python: {
      title: 'two_sum.py',
      language: 'Python',
      icon: '🐍',
      color: 'from-blue-500 to-blue-700',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      code: `def two_sum(nums, target):
    """
    Find two numbers in the array that add up to target.
    
    Args:
        nums: List of integers
        target: Target sum
        
    Returns:
        List of two indices that add up to target
    """
    num_map = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        if complement in num_map:
            return [num_map[complement], i]
            
        num_map[num] = i
    
    return []


# Example usage
if __name__ == "__main__":
    nums = [2, 7, 11, 15]
    target = 9
    result = two_sum(nums, target)
    print(f"Indices: {result}")  # Output: [0, 1]`,
      highlights: {
        keywords: ['def', 'if', '__name__', '__main__', 'for', 'in', 'return'],
        strings: ['"Find two numbers in the array that add up to target."', '"Args:"', '"nums: List of integers"', '"target: Target sum"', '"Returns:"', '"List of two indices that add up to target"', '"Indices: {result}"'],
        comments: ['# Example usage'],
        functions: ['two_sum', 'enumerate', 'print']
      }
    },
    golang: {
      title: 'two_sum.go',
      language: 'Go',
      icon: '🐹',
      color: 'from-cyan-500 to-cyan-700',
      textColor: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      code: `package main

import "fmt"

// TwoSum finds two numbers in the slice that add up to target
func TwoSum(nums []int, target int) []int {
    numMap := make(map[int]int)
    
    for i, num := range nums {
        complement := target - num
        
        if index, exists := numMap[complement]; exists {
            return []int{index, i}
        }
        
        numMap[num] = i
    }
    
    return []int{}
}

func main() {
    nums := []int{2, 7, 11, 15}
    target := 9
    
    result := TwoSum(nums, target)
    fmt.Printf("Indices: %v\\n", result) // Output: [0 1]
}`,
      highlights: {
        keywords: ['package', 'import', 'func', 'if', 'for', 'range', 'return', 'make', 'map'],
        strings: ['"fmt"', '"Indices: %v\\n"'],
        comments: ['// TwoSum finds two numbers in the slice that add up to target', '// Output: [0 1]'],
        functions: ['TwoSum', 'main', 'fmt.Printf']
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async (code, language) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(language);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const highlightCode = (code, highlights) => {
    // Para Java, vamos usar uma abordagem mais simples para evitar conflitos de HTML
    if (activeLanguage === 'java') {
      let highlightedCode = code;
      
      // Escape HTML characters first
      highlightedCode = highlightedCode
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      
      // Highlight multiline comments (/** ... */)
      highlightedCode = highlightedCode.replace(
        /\/\*\*[\s\S]*?\*\//g, 
        '<span class="text-green-600 italic">$&</span>'
      );
      
      // Highlight single line comments
      highlightedCode = highlightedCode.replace(
        /\/\/.*$/gm, 
        '<span class="text-green-600 italic">$&</span>'
      );
      
      // Highlight strings in quotes
      highlightedCode = highlightedCode.replace(
        /"[^"]*"/g, 
        '<span class="text-green-500">$&</span>'
      );
      
      // Highlight Java keywords
      const javaKeywords = ['import', 'public', 'class', 'static', 'int', 'if', 'for', 'return', 'new'];
      javaKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
        highlightedCode = highlightedCode.replace(regex, '<span class="text-purple-600 font-semibold">$1</span>');
      });
      
      // Highlight Java types and classes
      const javaTypes = ['HashMap', 'Map', 'Arrays', 'Integer', 'String'];
      javaTypes.forEach(type => {
        const regex = new RegExp(`\\b(${type})\\b`, 'g');
        highlightedCode = highlightedCode.replace(regex, '<span class="text-blue-600 font-medium">$1</span>');
      });
      
      // Highlight method calls
      highlightedCode = highlightedCode.replace(
        /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, 
        '<span class="text-blue-600 font-medium">$1</span>('
      );
      
      return highlightedCode;
    }
    
    // Para outras linguagens, manter a lógica original
    let highlightedCode = code;
    
    // Highlight multiline comments first (/** ... */)
    highlightedCode = highlightedCode.replace(/\/\*\*[\s\S]*?\*\//g, '<span class="text-green-600 italic">$&</span>');
    
    // Highlight single line comments
    highlightedCode = highlightedCode.replace(/\/\/.*$/gm, '<span class="text-green-600 italic">$&</span>');
    
    // Highlight strings
    highlights.strings.forEach(str => {
      const regex = new RegExp(`(${str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
      highlightedCode = highlightedCode.replace(regex, '<span class="text-green-500">$1</span>');
    });
    
    // Highlight keywords
    highlights.keywords.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
      highlightedCode = highlightedCode.replace(regex, '<span class="text-purple-600 font-semibold">$1</span>');
    });
    
    // Highlight functions
    highlights.functions.forEach(func => {
      const regex = new RegExp(`\\b(${func})\\b`, 'g');
      highlightedCode = highlightedCode.replace(regex, '<span class="text-blue-600 font-medium">$1</span>');
    });
    
    return highlightedCode;
  };

  const currentSnippet = codeSnippets[activeLanguage];

  return (
    <section 
      ref={sectionRef}
      id="code-snippets" 
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Code Showcase</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Demonstrating problem-solving skills across multiple programming languages
          </p>
          <div className="mt-6">
            <Badge variant="outline" className="text-sm px-4 py-2 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 transition-all duration-300 font-medium">
              <Terminal className="w-4 h-4 mr-2" />
              Two Sum Algorithm Implementation
            </Badge>
          </div>
        </div>

        {/* Language Selection */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-2 bg-white rounded-xl shadow-lg">
            {Object.entries(codeSnippets).map(([key, snippet]) => (
              <Button
                key={key}
                onClick={() => setActiveLanguage(key)}
                variant={activeLanguage === key ? "default" : "ghost"}
                className={`flex items-center space-x-2 transition-all duration-300 ${
                  activeLanguage === key 
                    ? `bg-gradient-to-r ${snippet.color} text-white shadow-lg scale-105` 
                    : 'hover:scale-105'
                }`}
              >
                <span className="text-lg">{snippet.icon}</span>
                <span className="font-medium">{snippet.language}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Code Display */}
        <div className="max-w-5xl mx-auto">
          <Card className={`${currentSnippet.bgColor} border-2 border-gray-200 shadow-2xl overflow-hidden transition-all duration-500 ${
            isVisible ? 'animate-fade-in-up' : ''
          }`}>
            <CardContent className="p-0">
              {/* IDE Header */}
              <div className={`bg-gradient-to-r ${currentSnippet.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span className="font-mono text-sm">{currentSnippet.title}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => copyToClipboard(currentSnippet.code, activeLanguage)}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                    >
                      {copiedCode === activeLanguage ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Code Content */}
              <div className="bg-gray-900 text-gray-100 p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-gray-500 select-none mr-4 text-right">
                    {currentSnippet.code.split('\n').map((_, index) => (
                      <div key={index} className="leading-relaxed">
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  
                  {/* Code */}
                  <div className="flex-1">
                    <pre 
                      className="whitespace-pre-wrap leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: highlightCode(currentSnippet.code, currentSnippet.highlights)
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className={`${currentSnippet.bgColor} p-4 border-t border-gray-200`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className={`${currentSnippet.textColor} border-current hover:bg-current/10 hover:text-current transition-all duration-300 font-medium`}>
                      <span className="mr-1">{currentSnippet.icon}</span>
                      {currentSnippet.language}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Time Complexity: O(n) | Space Complexity: O(n)
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentSnippet.code.split('\n').length} lines
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Algorithm Explanation */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2 text-purple-600" />
                Algorithm Explanation
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  The <strong>Two Sum</strong> problem is a classic algorithmic challenge that demonstrates 
                  efficient problem-solving using hash maps. Instead of using a brute force O(n²) approach, 
                  this solution achieves O(n) time complexity by storing complements in a hash map as we iterate 
                  through the array.
                </p>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Key Concepts:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Hash Map for O(1) lookups</li>
                      <li>• Single pass algorithm</li>
                      <li>• Complement calculation</li>
                      <li>• Index tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Applications:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Interview preparation</li>
                      <li>• Algorithm optimization</li>
                      <li>• Data structure usage</li>
                      <li>• Problem-solving patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CodeSnippetsSection;

