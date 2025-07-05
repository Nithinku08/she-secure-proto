import streamlit as st
from google import genai
from google.genai import types

# Set up Google GenAI client
client = genai.Client(
    vertexai=True,
    project="she-ai-460201",  # Replace with your actual Google Cloud Project ID
    location="global",
)

# System instruction for the chatbot
si_text = """A women-focused wellness chatbot.
- Provide **concise yet informative** suggestions for emotional and physical health concerns.
- Offer **recovery advice** for symptoms related to PMS, pregnancy, stress, anxiety, and chronic illnesses.
- Suggest **lifestyle adjustments** and **medical recommendations** while maintaining an empathetic tone.
- **DO NOT** answer questions unrelated to women's health topics.
- Keep answers **calm, supportive, and polite** while ensuring clarity."""

# Streamlit UI setup
st.title("Women's Wellness Chatbot")
st.subheader("Empowering women with AI-driven emotional & health support")

# User input
user_input = st.text_area("Tell me how you're feeling today, and I'll suggest ways to recover:", height=150)

if st.button("Submit") and user_input:
    # Define chatbot prompt
    contents = [
        types.Content(
            role="user",
            parts=[types.Part.from_text(text=user_input)]
        ),
    ]

    # Configure AI response with system instructions
    generate_content_config = types.GenerateContentConfig(
        temperature=0.9,
        max_output_tokens=1024,  # Allows more detailed responses
        system_instruction=[types.Part.from_text(text=si_text)],  # Include chatbot instructions
    )

    # Generate AI response
    response = ""
    for chunk in client.models.generate_content_stream(
        model="gemini-2.5-pro-preview-05-06",
        contents=contents,
        config=generate_content_config,
    ):
        if chunk.text:  # Ensure text is not None
            response += chunk.text

    # Display response in a structured format
    st.write("### Suggested Recovery Plan:")
    st.markdown(response if response else "_No response generated. Please try again._")

# **Run Instructions**
# 1. Install dependencies: `pip install streamlit google-genai`
# 2. Replace `"she-ai-460201"` with your actual Google Cloud Project ID.
# 3. Save the script as `app.py` and run `streamlit run app.py`
